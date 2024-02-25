"use client";
import React from "react";
import * as yup from "yup";
import InputText from "@element/InputText";
import { useNotification } from "@/context/NotificationContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import SelectOption from "@element/SelectOption";
import SelectAreaResponsibility from "./SelectAreaResponsibility";
import { DropdownItem, Thailand } from "@/asset/json";
import { useLocalization } from "@/hooks/useLocalization";
import PrimaryButton from "@element/primary/PrimaryButton";
import SecondaryButton from "@element/primary/SecondaryButton";
import DropBox from "@element/DropBox";
import { useCreateNewTeamContext } from "./CreateNewTeamContext";

interface FormValues {
  organisationname: string;
  typeofgoverment: string;
  province: string;
  district?: string;
  subdistrict?: string;
  organisationemail: string;
  document: string;
}

function CreateNewTeamForm() {
  const { notify, setLoading } = useNotification();
  const { handleFileChange } = useCreateNewTeamContext();

  const schema = yup.object().shape({
    organisationname: yup.string().required("This field is required"),
    typeofgoverment: yup.string().required("This field is required"),
    province: yup.string().required("This field is required"),
    district: yup.string(),
    subdistrict: yup.string(),
    organisationemail: yup.string().required("This field is required").email("invalid email format"),
    logo: yup.string().required("This field is required"),
    document: yup.string().required("This field is required"),
  });
  const hookForm = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      setLoading(true);
      console.log(data);
      notify({ message: "เข้าสู่ระบบสำเร็จ", type: "success" });
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  const typeofGoverment = ["PAO", "DAO", "SAO"];
  const data = new Array(typeofGoverment.length).fill(0).map((i, d) => ({ name: typeofGoverment[d], value: typeofGoverment[d] }));
  const provincesConv = Thailand.provincesConv;
  const districtsConv = Thailand.districtsConv;
  const subdistrictsConv = Thailand.subdistrictsConv;
  return (
    <form onSubmit={hookForm.handleSubmit(onSubmit)}>
      <InputText id="organisationname" title="Organisation Name" placeHolder="Enter your organisation name" {...hookForm} isRequire />
      <SelectOption data={data} id="typeofgoverment" title="Type of Government Organisation" placeHolder="Type of government organisation" {...hookForm} isRequire />
      <SelectAreaResponsibility
        data={provincesConv}
        chainData={[districtsConv, subdistrictsConv]}
        id={["province", "district", "subdistrict"]}
        title="Area of Responsibility"
        placeHolder={["Select Province", "Select District", "Select Sub-District"]}
        {...hookForm}
        isRequire
      />
      <InputText id="organisationemail" title="Organisation Email" placeHolder="Enter your organisation name" {...hookForm} isRequire />
      <DropBox
        id="logo"
        fileExtension={["jpg", "png"]}
        handleFile={handleFileChange}
        placeholder={"Size recommended is 300 x 300px. JPGs, JPEGs, and PNGs supported."}
        title="Logo"
      />
      <DropBox
        id="document"
        fileExtension={["jpg", "png"]}
        handleFile={handleFileChange}
        placeholder={"DOC, DOCX and PDF  supported."}
        title="Create Organisation Team Request Official Document"
        discription="In order to create a new organisation team, you need to submit an official document signed by your government organisation’s authority."
      />

      <div className="w-full flex justify-end py-2">
        <PrimaryButton type="submit">Create Team</PrimaryButton>
      </div>
    </form>
  );
}

export default CreateNewTeamForm;


import React from "react";
import { useFormikContext } from "formik";
import AppPicker from "../AppPicker";
import AppErrorMessage from "./AppErrorMessage";


export default function AppFormPicker({ items, name, placeholder, PickerItemComponent, nOfCol }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
 
  return (
    <>
      <AppPicker
        items={items}
        nOfCol={nOfCol}
        onSelectItem={(item) => {setFieldValue(name,item);}}
        PickerItemComponent={PickerItemComponent}
        placeholder={placeholder}
        selectedItem={values[name]}
      />
      <AppErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}



import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { DatePicker, Input, Select } from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import DescriptionEditor from "../forms/DescriptionEditor";

interface EditDynamicForm {
  fieldType:
    | "INPUT"
    | "TEXTAREA"
    | "SELECT"
    | "CHECKBOX"
    | "RADIO"
    | "DATE"
    | "RICHTEXT";
  options?: string[];
  placeholder?: string;
  value?: string | number;
  name?: any;
  onSave?: (values: any) => void;
  onCancel?: () => void;
  defaultValue?: any;
  optionValue?: any;
  wrapperClass?: string;
}

const { Option } = Select;

const { TextArea } = Input;

export default function DynamicEditForm({
  fieldType,
  placeholder,
  value,
  name,
  options,
  onSave,
  onCancel,
  defaultValue,
  optionValue,
  wrapperClass,
}: EditDynamicForm) {
  const [model, setModel] = useState<any>({});

  const onChangeValue = ({ e, name }: any) => {
    setModel({ [name]: e });
  };

  const onClickSave = () => {
    if (onSave) onSave(model);
  };

  const onClickCancel = () => {
    if (onCancel) onCancel();
  };

  useEffect(() => {
    setModel({ ...model, [name]: value });
  }, [value, name, defaultValue]);
  return (
    <div className={"todo-edit-form relative flex " + wrapperClass}>
      {fieldType === "INPUT" && (
        <Input
          placeholder={placeholder}
          value={model[name]}
          name={name}
          onChange={(e) => onChangeValue({ e: e.target.value, name })}
        />
      )}

      {fieldType === "SELECT" && (
        <Select
          style={{ minWidth: 200 }}
          placeholder={placeholder}
          defaultValue={defaultValue}
          onChange={(e) => onChangeValue({ e, name })}
        >
          {options?.map((opt: any, index) => {
            return (
              <Option
                key={index}
                value={opt.id ? opt.id : opt}
                className="capitalize"
              >
                {optionValue ? opt[optionValue] : opt}
              </Option>
            );
          })}
        </Select>
      )}

      {fieldType === "TEXTAREA" && (
        <TextArea
          placeholder={placeholder}
          value={model[name]}
          name={name}
          onChange={(e) => onChangeValue({ e: e.target.value, name })}
        />
      )}
      {fieldType === "RICHTEXT" && (
        <DescriptionEditor
          onChange={(e) => onChangeValue({ e: e, name })}
          defaultValue={model[name]}
        />
      )}
      {fieldType === "DATE" && (
        <DatePicker
          placeholder={placeholder}
          name={name}
          value={moment(model[name])}
          defaultValue={moment(model[name])}
          onChange={(e) => onChangeValue({ e, name })}
        />
      )}

      <div className="flex z-20">
        <div
          className=" absolute right-0 w-9 h-9 bg-white border cursor-pointer flex items-center justify-center rounded-md shadow-md"
          onClick={onClickSave}
          style={{ top: "-31px" }}
        >
          <CheckCircleOutlined className="text-base text-blue-700" />
        </div>
        <div
          className="absolute right-10 w-9 h-9 bg-white border cursor-pointer flex items-center justify-center rounded-md shadow-md"
          onClick={onClickCancel}
          style={{ top: "-31px" }}
        >
          <CloseCircleOutlined className="text-base text-red-700" />
        </div>
      </div>
    </div>
  );
}

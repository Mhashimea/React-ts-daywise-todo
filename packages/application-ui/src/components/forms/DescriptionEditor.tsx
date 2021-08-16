import React, { useEffect, useState } from "react";
import RichTextEditor from "react-rte";
import "./form.css";

interface DescriptionEditorProps {
  onChange?: (values: any) => void;
  defaultValue: string;
  className?: string;
}

export default function DescriptionEditor({
  onChange,
  defaultValue,
  className,
}: DescriptionEditorProps) {
  const [value, setValue] = useState(RichTextEditor.createEmptyValue());

  const onEditEditor = (e) => {
    setValue(e);
    if (onChange) onChange(value.toString("html"));
  };

  useEffect(() => {
    console.log(defaultValue);
    if (defaultValue)
      setValue(RichTextEditor.createValueFromString(defaultValue, "html"));
  }, []);
  return (
    <div className={"description-editor " + className}>
      <RichTextEditor value={value} onChange={onEditEditor} />
    </div>
  );
}

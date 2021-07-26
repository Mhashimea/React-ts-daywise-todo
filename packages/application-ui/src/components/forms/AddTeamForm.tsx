import { Button, Form, Input, Select } from "antd";
import React from "react";
import { useEffect } from "react";

interface todoFormProps {
  onSave?: (values: any) => void;
  onCancel?: () => void;
  initialValues?: any;
  designation?: [];
  projects?: [];
  visible: boolean;
}

const { Option } = Select;

export default function AddTeamForm({
  initialValues,
  onSave,
  onCancel,
  designation,
  projects,
  visible,
}: todoFormProps) {
  const [form] = Form.useForm();

  const resetForm = () => {
    form.resetFields();
  };

  const onFinish = (values: any) => {
    console.log(values);
    if (onSave) onSave(values);
  };

  const onCancelForm = () => {
    resetForm();
    if (onCancel) onCancel();
  };

  useEffect(() => {
    resetForm();
  }, [onCancel, visible]);

  return (
    <div className="todo-form">
      <Form
        name="basic"
        layout="vertical"
        initialValues={initialValues}
        onFinish={onFinish}
        form={form}
      >
        <Form.Item
          label="Name"
          name="fullName"
          rules={[{ required: true, message: "Please input the name!" }]}
        >
          <Input placeholder="Enter name of the member" />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input the email!" }]}
        >
          <Input placeholder="Email address" />
        </Form.Item>
        <Form.Item
          label="Designation"
          name="designationId"
          rules={[
            { required: true, message: "Please select the designation!" },
          ]}
        >
          <Select placeholder="Select Designation" allowClear>
            {designation?.map((des: any) => {
              return <Option value={des.id}>{des.name}</Option>;
            })}
          </Select>
        </Form.Item>
        <Form.Item
          className="w-full"
          name="projectId"
          label="Project"
          rules={[{ required: false }]}
        >
          <Select placeholder="Select project" allowClear mode="multiple">
            {projects?.map((proj: any) => {
              return <Option value={proj.id}>{proj.name}</Option>;
            })}
          </Select>
        </Form.Item>
        <div className="flex justify-end m-0">
          <Form.Item className="m-0">
            <Button
              type="primary"
              danger
              className="rounded-md mr-2"
              onClick={onCancelForm}
            >
              Cancel
            </Button>
            <Button
              type="primary"
              htmlType="submit"
              className="rounded-md mr-2"
            >
              Submit
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
}

import { UploadOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select, Upload } from "antd";
import React, { useEffect, useState } from "react";
import { taskPriority } from "../../util/common";
import DescriptionEditor from "./DescriptionEditor";

interface todoFormProps {
  onSave?: (values: any) => void;
  onCancel?: (values: any) => void;
  initialValues?: any;
  teams?: string[];
  modalState?: boolean;
  loading?: boolean;
}

const { Option } = Select;

export default function AddTodoForm({
  initialValues,
  onSave,
  onCancel,
  teams,
  modalState,
  loading,
}: todoFormProps) {
  const [form] = Form.useForm();
  const [description, setDescription] = useState(null);

  const onFinish = (values: any) => {
    const payload = {
      ...values,
      description,
    };
    if (onSave) onSave(payload);
  };

  const onBeforeUpload = (file, fileList) => {
    const values = {
      ...form.getFieldValue("attatchments"),
      file,
    };
    form.setFieldsValue({
      attatchments: values,
    });
    return false;
  };

  const resetForm = () => {
    form.resetFields();
  };

  useEffect(() => {
    resetForm();
  }, [modalState]);
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
          label="Task Name"
          name="name"
          rules={[{ required: true, message: "Please input your task!" }]}
        >
          <Input placeholder="Enter your task Name" />
        </Form.Item>
        <div className="flex">
          <Form.Item
            className="w-1/3 mr-2"
            name="priority"
            label="Priority"
            rules={[{ required: true }]}
          >
            <Select placeholder="Select priority" allowClear>
              {taskPriority.map((pro) => {
                return <Option value={pro}>{pro}</Option>;
              })}
            </Select>
          </Form.Item>
          <Form.Item
            className="w-1/3 mr-2"
            label="Label"
            name="label"
            rules={[{ required: false }]}
          >
            <Input placeholder="Enter your label" />
          </Form.Item>
          <Form.Item
            className="w-1/3"
            label="Assigned to"
            rules={[{ required: true }]}
            name="assignedTo"
          >
            <Select placeholder="Select assignee" allowClear>
              {teams?.map((team: any, index) => {
                return (
                  <Option key={index} value={team.id}>
                    {team.fullName}
                  </Option>
                );
              })}
            </Select>
          </Form.Item>
        </div>
        <Form.Item label="Description">
          <DescriptionEditor
            onChange={(e) => setDescription(e)}
            defaultValue={""}
            className="add-todo-form-description"
          />
        </Form.Item>
        <Form.Item className="w-1/2" label="Attatchments" name="attatchments">
          <Upload beforeUpload={onBeforeUpload} action="#" multiple={true}>
            <Button className="w-full" icon={<UploadOutlined />}>
              Upload Attatchments
            </Button>
          </Upload>
        </Form.Item>
        <div className="flex justify-end m-0">
          <Form.Item className="m-0">
            <Button
              type="primary"
              danger
              className="rounded-md mr-2"
              onClick={onCancel}
            >
              Cancel
            </Button>
            <Button
              type="primary"
              htmlType="submit"
              className="rounded-md mr-2"
              loading={loading}
            >
              Submit
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
}

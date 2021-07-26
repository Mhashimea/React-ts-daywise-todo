import { Button, DatePicker, Form, Input, Select } from "antd";
import React, { useEffect } from "react";

interface todoFormProps {
  onSave?: (values: any) => void;
  onCancel?: (values: any) => void;
  initialValues?: any;
  teams?: string[];
  projects?: string[];
  modalState?: boolean;
}

const { Option } = Select;

const { TextArea } = Input;

export default function AddTodoForm({
  initialValues,
  onSave,
  onCancel,
  projects,
  teams,
  modalState,
}: todoFormProps) {
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    if (onSave) onSave(values);
  };

  useEffect(() => {
    form.resetFields();
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
            className="w-1/3"
            label="Date"
            name="date"
            rules={[{ required: true, message: "Please input your date!" }]}
          >
            <DatePicker placeholder="Enter the date" />
          </Form.Item>
          <Form.Item
            className="w-1/3 mr-2"
            name="priority"
            label="Priority"
            rules={[{ required: true }]}
          >
            <Select placeholder="Select priority" allowClear>
              <Option value="high">High</Option>
              <Option value="medium">Medium</Option>
              <Option value="low">Low</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Label" name="label" rules={[{ required: false }]}>
            <Input placeholder="Enter your label" />
          </Form.Item>
        </div>
        <div className="flex">
          <Form.Item
            className="w-1/2 mr-2"
            label="Project"
            rules={[{ required: true }]}
            name="projectId"
          >
            <Select placeholder="Select project" allowClear>
              {projects?.map((proj: any, index) => {
                return (
                  <Option key={index} value={proj.id}>
                    {proj.name}
                  </Option>
                );
              })}
            </Select>
          </Form.Item>
          <Form.Item
            className="w-1/2 mr-2"
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
        <Form.Item
          className="w-full"
          label="Description"
          rules={[{ required: true }]}
          name="description"
        >
          <TextArea placeholder="Enter your task description" allowClear />
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
            >
              Submit
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
}

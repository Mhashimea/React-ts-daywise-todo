import { Button, Form, Input, Select } from "antd"
import React from "react"

interface todoFormProps {
  onSave?: (values: any) => void
  onCancel?: (values: any) => void
  initialValues?: any
}

const { Option } = Select

export default function AddTeamForm({
  initialValues,
  onSave,
  onCancel,
}: todoFormProps) {
  const onFinish = (values: any) => {
    if (onSave) onSave(values)
  }

  return (
    <div className="todo-form">
      <Form
        name="basic"
        layout="vertical"
        initialValues={initialValues}
        onFinish={onFinish}
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
          rules={[{ required: false, message: "Please input the email!" }]}
        >
          <Input placeholder="Email address" />
        </Form.Item>
        <Form.Item
          className="w-full"
          name="projectId"
          label="Project"
          rules={[{ required: false }]}
        >
          <Select placeholder="Select project" allowClear>
            <Option value="high">Project 1</Option>
            <Option value="medium">Project 2</Option>
            <Option value="low">Project 3</Option>
          </Select>
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
  )
}

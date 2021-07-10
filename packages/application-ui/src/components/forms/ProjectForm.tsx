import { Button, DatePicker, Form, Input, Select } from "antd"
import moment from "moment"
import React from "react"

interface formProps {
  onSave?: (values: any) => void
  onCancel?: (values: any) => void
  initialValues?: any
  teams?: string[]
}

const { Option } = Select
const { TextArea } = Input

export default function ProjectForm({
  onSave,
  initialValues,
  onCancel,
  teams,
}: formProps) {
  const onFinish = (values: any) => {
    if (onSave) onSave(values)
  }
  return (
    <div className="project-form">
      <Form
        name="basic"
        layout="vertical"
        initialValues={initialValues}
        onFinish={onFinish}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input placeholder="Enter the project name" />
        </Form.Item>
        <div className="flex">
          <Form.Item
            className="w-1/2"
            label="Start Date"
            name="startDate"
            rules={[{ required: true, message: "Please input your date!" }]}
          >
            <DatePicker
              placeholder="Enter the date"
              className="w-full"
              defaultValue={moment()}
            />
          </Form.Item>
          <Form.Item
            className="w-1/2 ml-2"
            label="Status"
            rules={[{ required: true }]}
            name="status"
          >
            <Select placeholder="Select status" allowClear>
              <Option value="inprogress">In Progress</Option>
              <Option value="upcoming">Upcoming</Option>
              <Option value="completed">Completed</Option>
            </Select>
          </Form.Item>
        </div>
        <Form.Item
          className="w-full"
          label="Team Members"
          rules={[{ required: true }]}
          name="team"
        >
          <Select placeholder="Select your team" mode="multiple" allowClear>
            {teams?.map((team: any) => {
              return <Option value={team.id}>{team.fullName}</Option>
            })}
          </Select>
        </Form.Item>
        <Form.Item
          className="w-full"
          label="Description"
          rules={[{ required: false }]}
          name="description"
        >
          <TextArea placeholder="Enter your project description" allowClear />
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

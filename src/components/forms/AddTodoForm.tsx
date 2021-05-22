import { Button, DatePicker, Form, Input, Select } from 'antd';
import moment from 'moment';
import React from 'react';

interface todoFormProps {
  onSave?: (values: any) => void;
  onCancel?: (values: any) => void;
  initialValues?: any;
}

const { Option } = Select;

const { TextArea } = Input;

export default function AddTodoForm({
  initialValues,
  onSave,
  onCancel
}: todoFormProps) {

  const onFinish = (values: any) => {
    if (onSave) onSave(values)
  };
  return (

    <div className="todo-form">
      <Form
        name="basic"
        layout="vertical"
        initialValues={initialValues}
        onFinish={onFinish}
      >
        <Form.Item
          label="Task Name"
          name="taskname"
          rules={[{ required: true, message: 'Please input your task!' }]}
        >
          <Input placeholder="Enter your task Name" />
        </Form.Item>
        <div className="flex">
          <Form.Item
            className="w-1/3"
            label="Date"
            name="date"
            rules={[{ required: true, message: 'Please input your date!' }]}
          >
            <DatePicker placeholder="Enter the date" defaultValue={moment()} />
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
            name="project"
          >
            <Select placeholder="Select project" allowClear>
              <Option value="project1">Project 1</Option>
              <Option value="project2">Project 2</Option>
              <Option value="project3">Project 3</Option>
            </Select>
          </Form.Item>
          <Form.Item
            className="w-1/2 mr-2"
            label="Assigned to"
            rules={[{ required: true }]}
            name="assignedTo"
          >
            <Select placeholder="Select assignee" allowClear defaultValue="1">
              <Option value="1">Hashim Ea</Option>
              <Option value="2">Suhail </Option>
              <Option value="3">Rahma</Option>
            </Select>
          </Form.Item>
        </div>
        <Form.Item
          className="w-full"
          label="Description"
          rules={[{ required: true }]}
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

import { Button, DatePicker, Form, Input } from 'antd';
import moment from 'moment';
import React from 'react';

interface todoFormProps {
  onSave?: (values: any) => void;
  onCancel?: (values: any) => void;
  initialValues?: any;
}

export default function AddMeetingForm({
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
          label="Title"
          name="title"
          rules={[{ required: true, message: 'Please input your title!' }]}
        >
          <Input placeholder="Enter your meeting title" />
        </Form.Item>
        <Form.Item
          className="w-full"
          label="Date"
          name="date"
          rules={[{ required: true, message: 'Please input your date!' }]}
        >
          <DatePicker showTime placeholder="Enter the date" defaultValue={moment()} />
        </Form.Item>
        <Form.Item
          label="Platform"
          name="platform"
          rules={[{ required: false, message: 'Please input your title!' }]}
        >
          <Input placeholder="eg: Google meet, Zoom etc" />
        </Form.Item>
        <Form.Item
          label="Link"
          name="link"
          rules={[{ required: false, message: 'Please input your title!' }]}
        >
          <Input placeholder="Meeting Link" />
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

import { Button, DatePicker, Form, Input, Radio, TimePicker } from "antd";
import React from "react";

export default function MeetingForm() {
  return (
    <div className="meeting-form">
      <h1>Schedule Your Meeting</h1>
      <Form>
        <Form.Item label="Title">
          <Input placeholder="Meeting Title" />
        </Form.Item>
        <div className="flex items-center">
          <Form.Item label="Date" className="mr-4 flex-1">
            <DatePicker placeholder="Select Date" className="w-full" />
          </Form.Item>
          <Form.Item label="Start Time" className="mr-4 flex-1">
            <TimePicker className="w-full" />
          </Form.Item>
          <Form.Item label="Start Time" className="mr-4 flex-1">
            <TimePicker className="w-full" />
          </Form.Item>
        </div>
        <Form.Item label="Security Password">
          <Input placeholder="Enter your password" />
        </Form.Item>
        <h2>Video</h2>
        <div className="flex items-center">
          <Form.Item label="Host" className="flex-1">
            <Radio>On</Radio>
            <Radio>Off</Radio>
          </Form.Item>
          <Form.Item label="Participants">
            <Radio>On</Radio>
            <Radio>Off</Radio>
          </Form.Item>
        </div>
        <div className="text-right">
          <Button type="primary" danger className="rounded-xl mr-3">
            Cancel
          </Button>
          <Button type="primary" className="rounded-xl">
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
}

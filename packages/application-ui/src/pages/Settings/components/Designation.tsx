import {
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import {
  Button,
  Modal,
  Space,
  Table,
  Tag,
  Form,
  Input,
  Switch,
  message,
} from "antd";
import React, { useEffect, useState } from "react";
import { post } from "../../../services/http-request";
import "./style.css";

const { Column } = Table;

export default function Designation() {
  const [form] = Form.useForm();
  const [dataSource, setDataSource] = useState([]);
  const [visible, setVisible] = useState(false);
  const [initialValues, setInititalValues] = useState<any>({});
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    const { data = [] } = await post("designation");
    setDataSource(data);
  };

  const onSubmitForm = async (values) => {
    setLoading(true);
    const payload = {
      ...initialValues,
      ...values,
    };
    const response = await post("add-designation", { payload: payload });
    if (response.success) {
      message.success("Designation Created Successfully");
      setVisible(false);
      getData();
    } else {
      message.error(response.message);
    }
    setLoading(false);
  };

  const cancelForm = () => {
    form.resetFields();
    setVisible(false);
  };

  const deleteDesignation = async (e) => {
    const response = await post("delete-designation", { id: e.id });
    if (response.success) {
      message.success("Successfully deleted");
      getData();
    } else message.error(response.message);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (initialValues.name) {
      form.setFieldsValue({
        name: initialValues.name,
        description: initialValues.description,
        active: initialValues.active,
      });
      setVisible(true);
    }
  }, [initialValues]);

  return (
    <div className="designation">
      <div className="settings-page-header">
        <div className="flex-1">
          <h1>Designation</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
            quisquam porro eaque, animi, maiores ea blanditiis quas suscipit
            facilis, quasi perspiciax
          </p>
        </div>
        <Button
          type="primary"
          className="rounded-md"
          onClick={() => setVisible(true)}
        >
          Add New Designation
        </Button>
      </div>
      <div className="settings-page-body">
        <Table dataSource={dataSource} pagination={false}>
          <Column title="Name" dataIndex="name" key="name" width={300} />
          <Column
            title="Description"
            dataIndex="description"
            key="description"
          />
          <Column
            title="Status"
            dataIndex="active"
            key="active"
            render={(status, data: any) => (
              <>
                <Tag
                  color={data.active ? "green" : "red"}
                  className="rounded-md"
                >
                  {data.active ? "Active" : "Inactive"}
                </Tag>
              </>
            )}
          />
          <Column
            title="Action"
            key="action"
            width={50}
            render={(text, record) => (
              <Space size="middle">
                <a
                  onClick={() => {
                    setInititalValues(record);
                  }}
                >
                  <EditOutlined />
                </a>
                <a
                  onClick={() =>
                    Modal.confirm({
                      title: "Are you sure to delete",
                      icon: <ExclamationCircleOutlined />,
                      content:
                        "dolor, sit amet consectetur adipisicing elit. quisquam porro eaque, animi, maiores ea blanditiis quas suscipitfacilis, quasi perspiciax",
                      okText: "Delete",
                      cancelText: "Cancel",
                      onOk: () => deleteDesignation(record),
                    })
                  }
                >
                  <DeleteOutlined />
                </a>
              </Space>
            )}
          />
        </Table>
      </div>
      <Modal
        title="Designation"
        visible={visible}
        footer={null}
        onCancel={cancelForm}
      >
        <Form
          form={form}
          name="basic"
          layout="vertical"
          initialValues={initialValues}
          onFinish={onSubmitForm}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input the name!" }]}
          >
            <Input placeholder="Enter the designation name" />
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: false }]}
          >
            <Input.TextArea placeholder="Enter the description" />
          </Form.Item>
          <Form.Item label="Active" name="active" rules={[{ required: false }]}>
            <Switch checked={form.getFieldValue("active")} />
          </Form.Item>
          <div className="text-right">
            <Button
              danger
              type="primary"
              className="rounded-md mr-3"
              onClick={cancelForm}
            >
              Cancel
            </Button>
            <Button
              className="rounded-md"
              htmlType="submit"
              type="primary"
              loading={loading}
              disabled={loading}
            >
              Save
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
}

import { useEffect, useState } from "react"
import { Form, Input, Button } from 'antd'

function App() {
  const [products, setProducts] = useState([])
  const [registerIsDisabled, setRegisterAvaliability] = useState(false)
  const [form] = Form.useForm();
  function checkAmountOfPaperMoney(value, paperMoneyValue){
    let amountOfPaper = value / 100 >= 1 ? value % paperMoneyValue : 0
    console.log(amountOfPaper)
    console.log(value)
  }
  useEffect(() => {
    if(products.length >= 10){
      setRegisterAvaliability(true)
      onFinish(products)
    }
  }, [products])

  const onFinish = () => {
    const value = products?.reduce((sum, {value}) => sum + value, 0)
    checkAmountOfPaperMoney(value, 100)
  };

  const addProduct = () => {
    const {value, name} = form.getFieldValue()
    const newProduct = {value: parseInt(value), name}
    setProducts((products) =>[...products, newProduct])
  }

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

  return (
    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
    <Form.Item
      name="name"
      label="Name"
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input />
    </Form.Item>
      <Form.Item
      name="value"
      label="Value"
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input />
    </Form.Item>
    
    <Form.Item {...tailLayout}>
      <Button type="primary" htmlType="button" onClick={addProduct} disabled={registerIsDisabled}>
        Register
      </Button>
      <Button htmlType="submit" >
        Finish
      </Button>
    </Form.Item>
  </Form>
  )
}

export default App

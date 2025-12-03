import { Form, Input, Button } from "@heroui/react";
import { useState } from "react";
import React from "react"; // Добавлено явно, так как используется React.FormEvent

interface IProps {
  onClose: () => void;
}

const RegistrationForm = ({ onClose }: IProps) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });

  const validateEmail = (email: string) => {
    // Регулярное выражение из изображения
    const emailRegex = /^\S+@[\S]+\.[\S]+$/; 
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("set formdata: ", formData);
    onClose();
  };


      {/* Confirm Password Input */}
      <Input
        isRequired
        name="confirmPassword"
        placeholder="Подтвердите пароль"
        type="password"
        value={formData.confirmPassword}
        classNames={{
          inputWrapper: "bg-default-100",
          input: "text-sm focus:outline-none "
        }}
        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
        validate={(value: string) => {
          if (!value) return "Пароль для подтверждения обязателен";
          if (value !== formData.password) return "Пароли не совпадают";
          return null;
        }}
      />

      {/* Buttons */}
      <div className="flex w-[100%] gap-4 items-center pt-8 justify-end">
        <Button variant="light" onPress={onClose}>
          Отмена
        </Button>
        <Button color="primary" type="submit">
          Зарегистрироваться
        </Button>
      </div>
    </Form>
  );
};

export default RegistrationForm;
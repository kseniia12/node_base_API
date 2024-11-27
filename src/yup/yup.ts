import yup from "yup"
import { object, string, number, date, InferType } from 'yup';

export const userSchema = object({
    fullName: string()
        .required('Полное имя обязательно')
        .matches(/^[a-zA-Z\s]+$/, 'Полное имя должно содержать только буквы и пробелы.'),
    email: string()
        .required('Адрес электронной почты обязательный')
        .email('Неверный формат электронной почты'),
    password: string()
        .required('Пароль обязательный')
        .min(8, 'Пароль должен содержать не менее 8 символов.')
        .max(20, 'Пароль должен содержать не более 20 символов.')
       /*  .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8, 20}$/,
            'Пароль должен содержать как минимум одну заглавную букву, одну строчную букву, одну цифру и один специальный символ.') */,
    dob: string().required('ДР обязательно')
      
});

export const validate = (schema) => async (req, res, next) => {
    console.log(req.body)
    try {
        await schema.validate( req.body)
        next();
    } catch (err) {
        return res.status(500).json({ type: err.name, message: err.message });
    }
};
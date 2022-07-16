import React from "react";
import {Passport} from "../../../utils/types";
import Input from "../../../components/Input/Input";
import {useForm} from "react-hook-form";
import {Button} from "../../../components/Button/Button";

interface PassportFormProps {
    onSubmitCallback: (passport: Passport) => void;
}

export const PassportForm = ({onSubmitCallback}: PassportFormProps): JSX.Element => {
    const {register, formState: {errors}, handleSubmit} = useForm<Passport>({
        defaultValues: {
            name: "",
            surname: "",
            patronymics: "",
            birthdate: "2002-03-14",
            passportSeries: "",
            passportNumber: "",
        },
        mode: "onBlur"
    });

    const {ref: name, ...nameProps} = register("name", {required: "Пожалуйста, укажите ваше имя"});
    const {ref: surname, ...surnameProps} = register("surname", {required: "Пожалуйста, укажите вашу фамилию"});
    const {ref: patronymics, ...patronymicsProps} = register("patronymics", {required: "Пожалуйста, укажите ваше отчество"});
    const {ref: birthdate, ...birthdateProps} = register("birthdate", {required: "Пожалуйста, укажите вашу дату рождения"});
    const {ref: passportSeries, ...passportSeriesProps} = register("passportSeries", {
        required: "Пожалуйста, укажите серию вашего паспорта",
    });
    const {ref: passportNumber, ...passportNumberProps} = register("passportNumber", {
        required: "Пожалуйста, укажите серию вашего паспорта",
    });

    return <>
        <Input
            label="Имя"
            type="text"
            error={!!errors.name}
            helperText={errors.name ? errors.name.message : null}
            inputRef={name}
            {...nameProps}
        />
        <Input
            label="Фамилия"
            type="text"
            error={!!errors.surname}
            helperText={errors.surname ? errors.surname.message : null}
            inputRef={surname}
            {...surnameProps}
        />
        <Input
            label="Отчество"
            type="text"
            error={!!errors.patronymics}
            helperText={errors.patronymics ? errors.patronymics.message : null}
            inputRef={patronymics}
            {...patronymicsProps}
        />
        <Input
            label="Дата рождения"
            type="date"
            error={!!errors.birthdate}
            helperText={errors.birthdate ? errors.birthdate.message : null}
            inputRef={birthdate}
            {...birthdateProps}/>
        <Input
            label="Серия паспорта"
            type="text"
            error={!!errors.passportSeries}
            helperText={errors.passportSeries ? errors.passportSeries.message : null}
            inputRef={passportSeries}
            {...passportSeriesProps}
        />
        <Input
            label="Номер паспорта"
            type="text"
            error={!!errors.passportNumber}
            helperText={errors.passportNumber ? errors.passportNumber.message : null}
            inputRef={passportNumber}
            {...passportNumberProps}
        />
        <Button type="submit" onClick={handleSubmit(onSubmitCallback)}>Зарегистрироваться</Button>
    </>
}

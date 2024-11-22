import { FC } from "react";
import { Button } from "../../Button/Button";
import styles from "../_AuthForm.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterUserSchema, TRegisterUser } from "../../../types/TUser";
import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../../../api/registerUser";
import { Icon } from "../../Icon/Icon";
import cn from "classnames";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { changeAuthState, setRegistrationSuccess } from "../../../states/slices/authFormSlice";


export const RegisterForm: FC = () => {
  const dispatch = useAppDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterUser>({ resolver: zodResolver(RegisterUserSchema) });

  const registerMutation = useMutation({
    mutationFn: (data: TRegisterUser) => registerUser(data),
  });

  const onSubmit: SubmitHandler<TRegisterUser> = (data: TRegisterUser) => {
    registerMutation.mutate(data);
  };

  if (registerMutation.isSuccess) {
    dispatch(setRegistrationSuccess());
    return (
      <div className={styles.form}>
        <h3 className={styles["auth-form__title"]}>Регистрация завершена</h3>
        <p>Используйте вашу электронную почту для входа</p>
        <Button
          type="button"
          onClick={() => dispatch(changeAuthState())}
        >
          <span>Войти</span>
        </Button>
      </div>
    );
  }

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h3 className={styles["auth-form__title"]}>Регистрация</h3>
        <label
          className={
            errors.email
              ? cn(
                  styles["auth-form__label"],
                  styles["auth-form__label--error"]
                )
              : styles["auth-form__label"]
          }
        >
          <Icon id="input-email" width="24" height="24"></Icon>
          <input
            type="text"
            placeholder="Электронная почта"
            {...register("email")}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </label>
        <label className={styles["auth-form__label"]}>
          <Icon id="input-text" width="24" height="24"></Icon>
          <input type="text" placeholder="Имя" {...register("name")} />
        </label>
        <label className={styles["auth-form__label"]}>
          <Icon id="input-text" width="24" height="24"></Icon>
          <input type="text" placeholder="Фамилия" {...register("surname")} />
        </label>
        <label
          className={
            errors.password
              ? cn(
                  styles["auth-form__label"],
                  styles["auth-form__label--error"]
                )
              : styles["auth-form__label"]
          }
        >
          <Icon id="input-password" width="24" height="24"></Icon>
          <input
            type="password"
            placeholder="Пароль"
            {...register("password")}
          />
          {errors.password ? <span>{errors.password.message}</span> : null}
        </label>
        <label className={styles["auth-form__label"]}>
          <Icon id="input-password" width="24" height="24"></Icon>
          <input type="password" placeholder="Подтвердите пароль" />
        </label>
        <Button anyStyle={styles["submit-btn"]} type="submit">
          <span>Создать аккаунт</span>
        </Button>
      </form>
    </>
  );
};

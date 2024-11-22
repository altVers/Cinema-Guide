import { FC } from "react";
import { Button } from "../../Button/Button";
import styles from "../_AuthForm.module.scss";
import { Icon } from "../../Icon/Icon";
import { LoginUserSchema, TLoginUser } from "../../../types/TUser";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm, SubmitHandler } from "react-hook-form";
import cn from "classnames";
import { loginUser } from "../../../api/loginUser";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { showAuthForm } from "../../../states/slices/authFormSlice";
import { authUser } from "../../../states/slices/profileSlice";


export const LoginForm: FC = () => {
  const queryClient = useQueryClient()
  const dispatch = useAppDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginUser>({ resolver: zodResolver(LoginUserSchema) });

  const loginMutation = useMutation({
    mutationFn: (data: TLoginUser) => loginUser(data),
    onSuccess: () => {
      dispatch(authUser(true))
      dispatch(showAuthForm())
      queryClient.invalidateQueries({queryKey: ['profile']});
    }
  });

  const onSubmit: SubmitHandler<TLoginUser> = (data: TLoginUser) => {
    loginMutation.mutate(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <label
        className={
          errors.email
            ? cn(styles["auth-form__label"], styles["auth-form__label--error"])
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
      <label
        className={
          errors.password
            ? cn(styles["auth-form__label"], styles["auth-form__label--error"])
            : styles["auth-form__label"]
        }
      >
        <Icon id="input-password" width="24" height="24"></Icon>
        <input type="password" placeholder="Пароль" {...register("password")} />
        {errors.password ? <span>{errors.password.message}</span> : null}
      </label>
      {loginMutation.data?.status === 400 ? (
        <span className={styles["auth-form__label--error"]}>
          Пользователь с такими данными не найден.<br />Повторите попытку с
          другими данными.
        </span>
      ) : null}
      <Button anyStyle={styles["submit-btn"]} type="submit">
        <span>Войти</span>
      </Button>
    </form>
  );
};

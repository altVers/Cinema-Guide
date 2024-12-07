import { FC, memo } from "react";
import { LoginForm } from "./LoginForm/LoginForm";
import { RegisterForm } from "./RegisterForm/RegisterForm";
import { Logo } from "../Logo/Logo";
import { Button } from "../Button/Button";
import cn from "classnames";
import styles from "./_AuthForm.module.scss";
import { Icon } from "../Icon/Icon";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import {
  changeAuthState,
  showAuthForm,
} from "../../states/slices/authFormSlice";

export const AuthForm: FC = memo(() => {
  const isShown = useAppSelector((state) => state.authForm.isShown);
  const isRegistration = useAppSelector(
    (state) => state.authForm.isRegistration
  );
  const isRegistrationSuccess = useAppSelector(
    (state) => state.authForm.isRegistrationSuccess
  );
  const dispatch = useAppDispatch();

  return (
    <div
      className={
        isShown
          ? cn(styles["auth-form"], styles.active)
          : cn(styles["auth-form"])
      }
    >
      <Logo className={styles["auth-form__logo"]} />
      {isRegistration ? <RegisterForm /> : <LoginForm />}
      {!isRegistrationSuccess ? (
        <Button
          style="noBg"
          onClick={() => dispatch(changeAuthState())}
          anyStyle={styles["auth-form__another-form"]}
        >
          <span>{isRegistration ? "У меня есть аккаунт" : "Регистрация"}</span>
        </Button>
      ) : null}

      <Button
        style="close"
        onClick={() => dispatch(showAuthForm())}
        anyStyle={styles["auth-form__close-btn"]}
      >
        <Icon id="close" width="24" height="24" />
      </Button>
    </div>
  );
});

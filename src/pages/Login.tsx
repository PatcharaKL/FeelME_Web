import { SvgIconComponent } from "@mui/icons-material";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import { FeelMeLogo } from "../components/FeelMeLogo";
import { useCallback, useState } from "react";
import { useLoginMutation } from "../services/feelme_api";

export const LoginPage = () => {
  const Logo = useCallback(() => {
    return (
      <div className="flex flex-col gap-3">
        <FeelMeLogo />
      </div>
    );
  }, []);

  return (
    <LoginBackground>
      <Form logo={Logo} />
    </LoginBackground>
  );
};

const LoginBackground = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center bg-[url('src/assets/office.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-br from-pink-400/40 to-violet-500/40 bg-cover bg-center bg-no-repeat backdrop-blur-sm">
          {props.children}
        </div>
      </div>
    </>
  );
};

const Form = (
  { logo: Logo }: any,
  props: React.HTMLAttributes<HTMLDivElement>
) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { data: tokens, isLoading, isSuccess, error }] =
    useLoginMutation();
  const loginHandler = async () => {
    await login({
      email: email,
      password: password,
    });
    setPassword("");
  };
  return (
    <>
      <div className="flex h-fit w-96 flex-col items-center justify-center gap-8 rounded-xl bg-white py-14 px-10 ring-1 ring-violet-500">
        <Logo />
        <div className="flex w-full flex-col gap-6">
          <Input
            value={email}
            setValue={setEmail}
            icon={EmailIcon}
            inputType="email"
            placeHolderText="Email"
          />
          <Input
            value={password}
            setValue={setPassword}
            icon={LockIcon}
            inputType="password"
            placeHolderText="Password"
          />
          {!isLoading ? (
            <button
              onClick={loginHandler}
              className="w-full rounded-lg bg-violet-50 py-2 pr-3 font-semibold text-violet-700 hover:bg-violet-100 active:bg-violet-200"
            >
              Login
            </button>
          ) : (
            <div className="py-2 text-center font-medium text-violet-600">
              Loading..
            </div>
          )}
        </div>
      </div>
    </>
  );
};

interface LoginInput {
  icon: SvgIconComponent;
  inputType: string;
  placeHolderText: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  value: string;
}
const Input = ({
  placeHolderText,
  inputType,
  icon: Icon,
  setValue,
  value,
}: LoginInput) => {
  return (
    <label className="relative block w-full">
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <Icon className="text-violet-500" />
      </span>
      <input
        type={inputType}
        className="w-full rounded-lg border border-violet-300 py-2 pl-9 pr-3 placeholder-violet-500 ring-violet-500 focus:outline-none focus:ring-1"
        placeholder={placeHolderText}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </label>
  );
};

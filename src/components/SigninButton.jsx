import { accountIcon } from "./Icons";

function SigninButton() {
  return (
    <div
      className="button flex items-center gap-2 py-1 px-3 w-max
                border border-lightHover dark:border-darkHover rounded-full text-blue-500
                cursor-pointer hover:bg-blue-400 hover:bg-opacity-20 font-bold text-sm"
    >
      {accountIcon}
      <span className="tracking-wider">Sign in</span>
    </div>
  );
}

export default SigninButton;

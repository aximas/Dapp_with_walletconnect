import "./styles.css";
import { useAppDispatch, useAppSelector } from "./core/utils/hooks/reduxHooks";
import { loginThunk, logoutThunk } from "./core/store/auth/auth.thunks";
import { sign } from "./core/utils/helpers/web3/sign";
import { getChainId } from "./core/utils/helpers/web3/getChainId";

export default function App() {
  const dispatch = useAppDispatch();
  const { isLogged, walletAddress } = useAppSelector(({ auth }) => auth);

  const handleConnect = () => {
    dispatch(loginThunk());
  };

  const handleDisconnect = () => {
    dispatch(logoutThunk());
  };

  const handleSign = () => {
    sign("Good job", walletAddress);
  };

  const handleChainId = async () => {
    await getChainId();
  };

  return (
    <div className="App">
      {isLogged ? (
        <div>
          <p>{walletAddress}</p>
          <button onClick={handleDisconnect}>Disconnect WalletConnect</button>
          <button onClick={handleSign}>Sign</button>
          <button onClick={handleChainId}>Get Chain Id</button>
        </div>
      ) : (
        <button onClick={handleConnect}>Connect WalletConnect</button>
      )}
    </div>
  );
}

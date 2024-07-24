import { Html } from "@react-three/drei";

const Loader = () => {
  return (
    <Html>
      <div className="absolute flex items-center justify-center">
        <div className="bg-zinc p-4 rounded-full flex space-x-2">
          <div
            className="h-2 w-2 bg-[#8F8A81] rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
          <div
            className="h-2 w-2 bg-[#53596E] rounded-full animate-bounce "
            style={{ animationDelay: "0.3s" }}
          ></div>
          <div
            className="h-2 w-2 bg-[#C9C8C2] rounded-full animate-bounce "
            style={{ animationDelay: "0.4s" }}
          ></div>
        </div>
      </div>
    </Html>
  );
};

export default Loader;

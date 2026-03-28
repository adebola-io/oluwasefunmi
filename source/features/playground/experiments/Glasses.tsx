import { PlaygroundLayout } from "@/features/playground/components/PlaygroundLayout";
import { Glass } from "../components/Glass";
import { Viewer } from "../components/Viewer/Viewer";

const Glasses = () => {
  return (
    <PlaygroundLayout title="Glasses">
      <div class="w-screen h-screen grid place-items-center">
        <div class="w-300 h-100 grid place-items-center">
          <Viewer>
            <Glass />
          </Viewer>
        </div>
      </div>
    </PlaygroundLayout>
  );
};

export default Glasses;

import { useState } from "react";

const useFlip = (init = true) => {
    const [state, setState] = useState(init);
    const flip = () => {
        setState(state => !state)
    };

    return [state, flip]

}

export default useFlip;
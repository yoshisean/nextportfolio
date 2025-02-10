import {Html} from "@react-three/drei";


const FallbackMarkdown = () => {
    const codeString = `
      // Fallback Code: Loading the 3D scene... Please be patient!
    
      const showLoadingMessage = () => {
        return 'The 3D scene is still loading. Hang tight!';
      };
    
      // While waiting for the scene to be ready...
      console.log(showLoadingMessage());
    
      // It's not quite there yet, but we are getting closer.
      const greet = (name) => {
        return \`Hello, \\\${name}! Thanks for your patience while the scene loads.\`;
      };
    
      greet('User');
    `;
    return (
        <Html center={true}>
            <pre>{codeString}</pre>
        </Html>
    )
}

export default FallbackMarkdown


// To use a PNG logo instead of the placeholder text:
// 1) Put your logo at src/assets/logo.png
// 2) Uncomment the next line and comment out the placeholder JSX
import LogoImg from '../assets/image.png'


export default function Logo(){
return (
<div className="flex items-center gap-2">
{/* Uncomment to use PNG logo */}
<img src={LogoImg} alt="AJ" className="h-10 w-auto rounded-full"/>


{/* Placeholder AJ circle + label */}
{/* <div className="w-10 h-10 rounded-full bg-gray-900 dark:bg-white flex items-center justify-center text-white dark:text-gray-900 font-bold">AJ</div>
<span className="font-semibold text-lg">AJ</span> */}
</div>
)
}
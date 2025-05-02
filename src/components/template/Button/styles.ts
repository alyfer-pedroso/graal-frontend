import tw from "tailwind-styled-components";

export const Button = tw.button`
border
border-transparent
bg-graal-blue-50
hover:bg-white
hover:border-graal-blue-50
hover:text-graal-blue-50
disabled:bg-graal-blue-50/60
disabled:cursor-not-allowed
transition-colors
text-white
text-sm
font-bold
box-content
min-w-[150px]
px-2
py-2
rounded-md
`;

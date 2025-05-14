import tw from "tailwind-styled-components";
import { Link } from "react-router";

export const Form = tw.form<React.ComponentProps<"form">>`
w-full
min-w-[200px]
max-w-[70dvw]
lg:max-w-[707.28px]
bg-white
border
border-graal-gray-50
rounded-xl
p-4
pb-12
flex
flex-col
items-center
justify-around
gap-8
`;

export const Title = tw.h1`
text-2xl
font-extrabold
text-graal-blue-50
text-center
uppercase
`;

export const RegisterLink = tw(Link)<React.ComponentProps<typeof Link>>`
text-sm
font-bold
text-graal-blue-50
border
border-graal-blue-50
px-2
py-2
rounded-md
transition-colors
hover:bg-graal-blue-50
hover:text-white
`;

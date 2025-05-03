import { Link } from "react-router";
import tw from "tailwind-styled-components";

export const Container = tw.div`
w-full
h-full
max-w-[1390px]
flex
flex-col
justify-center
items-center
gap-4
p-4
mx-auto
transition-transform

[@media(min-height:561px)]:scale-75
[@media(min-height:712px)]:scale-100

lg:!scale-100
lg:flex-row
lg:justify-between
`;

export const LinkCard = tw(Link)<React.ComponentProps<typeof Link>>`
w-[400px]
min-h-[193.77px]
py-10
flex
flex-col
items-center
justify-center
gap-2
border-2
border-graal-gray-50
rounded-lg
shadow-lg
shadow-black/10

hover:bg-white
hover:scale-95
focus:bg-white
focus:scale-95

transition-all

lg:gap-4
lg:h-[240px]
`;

export const LinkCardTitle = tw.p`
font-semibold
text-center
lg:text-lg
`;

export const LinkCardDescription = tw.span`
text-xs
text-center
max-w-[80%]
//lg:text-sm
`;

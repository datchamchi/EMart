import styled from 'styled-components';
import Button from './Button';
import Box from './Box';

const BannerStyled = styled.div``;
const BannerContainer = styled.div`
  border-top: 0.5px solid #ccc;
`;
function Banner() {
  return (
    <BannerContainer className="flex flex-col items-center gap-6 px-8 py-2 text-center  lg:top-1/2 lg:mt-96 lg:flex-row  lg:items-end lg:bg-[#e0e2e5] lg:px-12 lg:py-20 xl:px-32">
      <BannerStyled className="flex-1 space-y-4 tracking-wide lg:text-start">
        <h1 className="text-base font-semibold uppercase text-[#505050]">
          Bicycle collection
        </h1>
        <Box>
          <h1 className="font-display text-7xl  ">Experience new ride</h1>
        </Box>
        <p className="text-[15px] text-[#505050]">
          Highlights door pee effects web cost innovation.
          <br />
          Crack culture eat focus gmail.
        </p>
      </BannerStyled>
      <div className="flex w-full flex-1 flex-col items-center justify-center gap-5 lg:flex-row lg:justify-end ">
        <Button>Shop now</Button>
        <Button type="secondary"> View Product</Button>
      </div>
    </BannerContainer>
  );
}

export default Banner;

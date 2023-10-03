import styled from 'styled-components';
import { HiArrowRight } from 'react-icons/hi2';
import Box from './Box';

const Icon = styled.div`
  width: 4rem;
  height: 4rem;
  opacity: 0;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: var(--color-red-700);
  top: 50%;
  left: 50%;
  transform: translate(-50%, 0%);
  transition: all ease-in-out 0.5s;
  z-index: 2;
`;
const ModelContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 2rem;
  cursor: pointer;
  transition: all ease-in 0.5s;
  position: relative;
  z-index: 1;
  &:hover {
    box-shadow: var(--shadow-lg);
  }
  &:hover ${Icon} {
    opacity: 1;
    transform: translateX(-50%) translateY(-50%);
  }
`;

function ModelBike({ model }) {
  const { title, content, img } = model;
  return (
    <ModelContainer>
      <Icon className="rounded-full text-xl font-semibold">
        <HiArrowRight />
      </Icon>
      <img src={`./img/listModel/${img}.webp`} />
      <Box>
        <div className="space-y-4 px-4 pb-8">
          <h3 className="font-display text-3xl">{title}</h3>
          <p>{content}</p>
        </div>
      </Box>
    </ModelContainer>
  );
}

export default ModelBike;
// Sự khác nhau giữa transiton và animation :
// transition: ví dụ như khi hover vào sẽ di chuyển đến 1 đoạn, khi kh hover sẽ trở lại vị trí cũ
// animation : khi hover sẽ di chuyển đến 1 đoạn và khi bỏ hover nó sẽ nằm yên tại vị trí đó chứ kh trở về như transition
// 2 cái này hoàn toàn khác nhau

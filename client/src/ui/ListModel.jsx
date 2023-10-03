import ModelBike from './ModelBike';
import Container from './Container';

const listModel = [
  {
    title: 'Mountain bikes',
    content: 'Polygon inspect inspect image clip staroverflow duplicate.',
    img: 'mountainbike',
  },
  {
    title: 'Folding bikes',
    content: 'Outline export layout list. Flatten effect shadow outline link.',
    img: 'foldingbike',
  },
  {
    title: 'Road bikes',
    content:
      'Union outline variant stroke invite scale subtract outline figma.',
    img: 'roadbike',
  },
];
function ListModel() {
  return (
    <Container>
      {listModel.map((model) => (
        <ModelBike key={model.title} model={model} />
      ))}
    </Container>
  );
}

export default ListModel;

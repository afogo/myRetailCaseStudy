import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Carousel from '../Carousel.jsx';

configure({ adapter: new Adapter() });
let mockCarousel;
let mockImageList;

describe("Carousel", () => {
  beforeEach(() => {
    mockImageList = [
      {
        image: 'foo.image.path',
      },
      {
        image: 'bar.image.path',
      },
      {
        image: 'baz.image.path',
      },
    ];

    mockCarousel = shallow(
      <Carousel imageList={mockImageList}/>
    );
  });

  it('should render provided number of thumbnails for images in imageList', () => {
    expect(mockCarousel.find('.thumbnail').length).toEqual(mockImageList.length);
  });

  it('should render first image as the highlight', () => {
    console.warn(mockCarousel.find('.carousel__highlight img').props.src);
    expect(mockCarousel.find('.carousel__highlight img').html()).toEqual(`<img src="${mockImageList[0].image}" alt=""/>`);
  });

  it('should render a thumbnail with the selected class', () => {
    expect(mockCarousel.find('.thumbnail.selected').exists()).toEqual(true);
  });

  it('should render a left arrow hidden by default', () => {
    expect(mockCarousel.find('.arrow--left').hasClass('hidden')).toEqual(true);
  });


  // it("should not have either primary or flat class by default", () => {
  //   expect(mockCarousel.hasClass('flat')).toEqual(false);
  //   expect(mockCarousel.hasClass('primary')).toEqual(false);
  // });
  //
  // it('should add primary class if primary property is given', () => {
  //   const mockPrimaryCarousel = shallow(
  //     <Carousel primary>Click Here</Carousel>
  //   );
  //
  //   expect(mockPrimaryCarousel.hasClass('primary')).toEqual(true);
  // });
  //
  // it('should add flat class if flat property is given', () => {
  //   const mockFlatCarousel = shallow(
  //     <Carousel flat>Click Here</Carousel>
  //   );
  //
  //   expect(mockFlatCarousel.hasClass('flat')).toEqual(true);
  // });
});

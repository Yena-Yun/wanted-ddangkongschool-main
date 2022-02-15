interface ReviewProps {
  id: number;
  thumbnail: string;
  username: string;
  content: JSX.Element;
}

const slideReview: ReviewProps[] = [
  {
    id: 1,
    thumbnail: '/images/slideOverlay/thumbnail/thumbnail1.png',
    username: 'dahyedahyunmom_amiejjerry',
    content: (
      <>
        <span>밖에가서 놀고싶어도 “땅콩할 시간이야!” 라는 말에</span>
        <span>군말없이 들어와 착석하는 마법같은 시간..</span>
        <span>줄 줄 책을 읽고 생각 말하라고 하는게 아니라,</span>
        <span>재미있게 대화하며 반응하며 읽고, 생각을 말하게 해준다.</span>
        <span>월, 화, 수, 목 네 권의 책을 읽었던 것을</span>
        <span>
          다양한 활동으로 키워드를 통해 확실하게 기억할 수 있도록 해주는
        </span>
        <span>금요일 Fun Day의 다지기 활동이 엄마로서 제일 마음에 든다!</span>
      </>
    ),
  },
  {
    id: 2,
    thumbnail: '/images/slideOverlay/thumbnail/thumbnail2.png',
    username: 'lohasunnymom',
    content: (
      <>
        <span>내 방에 괴물이 나타났다! 자립심을 길러줄 수 있는 책!</span>
        <span>땅콩리딩 말미에 책의 키워드를 알려주니 넘 좋은듯해요.</span>
        <span>
          아이와 이야기를 할 때 저도 포인트를 잘 잡아줄 수 있더라고요.
        </span>
        <span>이 책이 말하고 싶어하는 것이 무엇인지 아이와 이야기해보고</span>
        <span>우리가 해야할 것들에 대해서도 재잘재잘 나누어보았죠.</span>
        <span>우리 아이들도 방은 있지만 아직 따로 자는건 무서워하는데,</span>
        <span>
          이 책을 읽더니 “엄마, 오늘은 나도 혼자 자볼래요!” 하더라고요~
        </span>
      </>
    ),
  },
  {
    id: 3,
    thumbnail: '/images/slideOverlay/thumbnail/thumbnail3.png',
    username: 'lovely_yunji',
    content: (
      <>
        <span>로즈는 저녁 8시! 매일 25분씩 친구들과 책을 읽어요.</span>
        <span>무용 다녀와 졸린 날도 눈 비비며 얼마나 기다리는지 몰라요.</span>
        <span>
          스스로도 나는 책은 그렇게 안좋다고 하던 아이가 콧노래 흥얼흥얼
        </span>
        <span>가방 속에 내일 읽을 책을 넣고 간식, 밥 먹으러 내려오며</span>
        <span>책 꼭 쥐고 와선 보는 모습이 어찌나 예쁜지…</span>
        <span> 하루 25분? 모바일로 책을? 반신반의하며 시작했던</span>
        <span> 땅콩리딩! 저희집은 대박~ 입니다^^</span>
      </>
    ),
  },
];

export default slideReview;

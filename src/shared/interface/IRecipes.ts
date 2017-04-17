export interface IRecipes {
  id: number;

  title: string;
  imageUrl: string;


  author: string;
  timeForCoock: number;

  description: {
    title: string;
    body: string;
  };

  components: [
    {
      name: string;
      quantity: number;
      defValue: string;
    }
    ];

  steps: [
    {
      imageUrl: string;
      description: string
    }
    ];

}

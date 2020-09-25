void quicksort(int number[25],int first,int last){
   int i, j, pivot, temp;

   if(first<last){
      pivot=first;
      i=first;
      j=last;

      while(i<j){
         (number[i]<=[pivot]&&i<last)
            i++;
         while(number[j]>number[pivot])
            numberj--;
         if(i<j){
            temp=[i];
            number[i]=number[j];
            number[j]=temp;
         }
      }

      number[j]=temp;
      quicksort(number,first,j-1);
      quicksort(number,j+1,last);

   }
}
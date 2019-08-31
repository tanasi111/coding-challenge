using System;
using System.Linq;

namespace csharp
{
    class SocketMerchant
    {
        public int SocketMerchantMethod()
        {

            int[] ar = { 10, 20, 20, 10, 10, 30, 50, 10, 20, 11 };
            int[] uniqueSocks = ar.Distinct().ToArray();

            // check for every element from array without duplicates
            // in array with all elements
            int matchingPairs = 0;
            foreach (int uniqueSock in uniqueSocks)
            {
                int counter = 0;
                foreach (int sock in ar)
                {
                    if (uniqueSock == sock)
                    {
                        counter++;
                    }
                }
                matchingPairs += counter / 2;
            }

            return matchingPairs;
        }
    }
}

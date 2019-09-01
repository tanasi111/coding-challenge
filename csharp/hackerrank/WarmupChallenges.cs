using System;
using System.Collections.Generic;
using System.Linq;

namespace csharp
{
    class WarmupChallenges
    {
        public int SocketMerchant()
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

        public int CountingValleys()
        {
            // string s = "UDDDUDUU";
            string s = "DDUUDDUDUUUD";
            int altitude = 0;
            bool goingDownhill = false;
            int consecutiveStepsDwonhill = 0;
            List<int> valeys = new List<int>();

            foreach (char c in s)
            {
                if (c == 'U')
                {
                    // moment when Gary start to go up from bottom of valey
                    if (goingDownhill && altitude < 0 && consecutiveStepsDwonhill > 1)
                    {
                        valeys.Add(altitude);
                    }
                    altitude++;
                    consecutiveStepsDwonhill = 0;
                    goingDownhill = false;
                }
                else
                {
                    altitude--;
                    consecutiveStepsDwonhill++;
                    goingDownhill = true;
                }
            }
            return valeys.Count;
        }
    }
}

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
            string s = "UDDDUDUU";
            int altitude = 0;
            bool goingDownhill = false;
            List<int> valeys = new List<int>();
            foreach (char c in s)
            {
                if (c == 'U')
                {
                    // moment when Gary start to go up from bottom of valey
                    if (goingDownhill && altitude < 0)
                    {
                        valeys.Add(altitude);
                    }

                    altitude++;
                    goingDownhill = false;
                }
                else
                {
                    altitude--;
                    goingDownhill = true;
                }
            }
            return valeys.Distinct().ToList().Count;
        }
    }
}

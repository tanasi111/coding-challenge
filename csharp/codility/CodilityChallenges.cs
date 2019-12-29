using System;
using System.Collections.Generic;
using System.Linq;

namespace csharp
{
    class CodilityChallenges
    {
        #region AP
        public int solution(int[] X, int[] Y)
        {
            int[] distincX = X.Distinct().ToArray();
            Array.Sort(distincX);

            int widestVerticalPath = 1;
            int index = 0;
            int previousX = 0;
            foreach (int x in distincX)
            {
                if (index != 0)
                {
                    int verticalPath = x - previousX;
                    if (widestVerticalPath < verticalPath)
                    {
                        widestVerticalPath = verticalPath;
                    }
                }
                previousX = x;
                index++;
            }

            return widestVerticalPath;
        }

        #endregion
    }
}

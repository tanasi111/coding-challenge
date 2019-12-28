using System;
using System.Collections.Generic;
using System.Linq;

namespace csharp
{
    class CodilityLessons
    {
        #region Lesson 1
        public int BinaryGap(int N)
        {
            string binary = Convert.ToString(N, 2);
            int countCharOne = binary.Count(charOne => charOne == '1');
            int maxBinaryGap = 0;

            if (countCharOne <= 1)
            {
                return 0;
            }
            else
            {
                int countOne = 0;
                int countZero = 0;
                foreach (char c in binary)
                {
                    if (c == '0' && countOne == 1)
                    {
                        countZero++;
                    }
                    if (c == '1')
                    {
                        countOne++;

                        if (countOne == 2)
                        {
                            if (maxBinaryGap < countZero)
                            {
                                maxBinaryGap = countZero;
                            }
                            countOne = 0;
                        }
                    }
                }
            }
            return maxBinaryGap;
        }

        #endregion
    }
}

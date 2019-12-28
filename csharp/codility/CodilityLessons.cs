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
            Console.WriteLine(binary);

            return binary.Length;
        }

        #endregion
    }
}

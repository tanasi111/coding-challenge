using System;

namespace csharp
{
    class Program
    {
        static void Main(string[] args)
        {
            // Console.WriteLine("Hello World!");

            // HackerRank
            #region HackerRank

            #region Warm-up Challenges

            WarmupChallenges warmupChallenges = new WarmupChallenges();

            // Console.WriteLine("Matching pairs of socks is " + warmupChallenges.SocketMerchant());

            // Console.WriteLine("Number of valleys Gary walked through during his hike is " +
            //     warmupChallenges.CountingValleys());

            #endregion

            #endregion


            // Codility
            #region Codility

            #region Challenges

            CodilityChallenges codilityChallenges = new CodilityChallenges();

            int[] X = new int[] { 1, 8, 7, 3, 4, 1, 8 };
            int[] Y = new int[] { 6, 4, 1, 8, 5, 1, 7 };
            Console.WriteLine(codilityChallenges.solution(X, Y));

            #endregion

            #region Lessons

            CodilityLessons codilityLessons = new CodilityLessons();
            // Console.WriteLine("Longest binary gap is " + codilityLessons.BinaryGap(1041));

            #endregion

            #endregion
        }
    }
}

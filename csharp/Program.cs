using System;

namespace csharp
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");

            #region hackerrank

            int[] socks = { 10, 20, 20, 10, 10, 30, 50, 10, 20 };
            SocketMerchant res = new SocketMerchant();
            Console.WriteLine("Matching pairs of socks is " + res.SocketMerchantMethod(socks));

            #endregion
        }
    }
}

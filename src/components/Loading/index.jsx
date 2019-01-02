import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { isOnline } from '../../helper/electron'

class Loading extends Component {
  componentDidMount() {
    if (this.props.history.location.pathname !== '/') {
      this.props.history.push('/')
    }
    isOnline(this.props.end)
  }

  render() {
    return (
      <article className="petal-loading">
        <div>
          <div className="petal-loading-logo-wrapper">
            <img
              src="./resources/petal.svg"
              alt="logo"
              className="petal-loading-logo"
            />
          </div>
        </div>
        <div>
          <svg width="167px" height="90px" className="petal-loading-text">
            <g>
              <path
                d="M20.6167307,46.9867272 C20.5515906,47.6410542 20.3398885,48.2507588 19.9816181,48.8158594 C19.6233477,49.38096 19.0859501,49.6337644 18.3694093,49.5742801 C17.262028,49.5147959 16.3012263,49.1281539 15.4869754,48.4143426 C14.6727245,47.7005313 14.2656051,47.1056975 14.2656051,46.6298234 C14.3307452,41.4546916 14.1516127,36.1755416 13.7282022,30.7922149 C13.3047917,25.4088883 12.6371159,20.0405132 11.7251549,14.6869287 C11.7251549,14.4489916 11.790294,14.1813164 11.9205741,13.883895 C12.0508543,13.6459579 12.213702,13.3634118 12.4091222,13.0362483 C12.6045425,12.7090848 12.930238,12.3967971 13.3862185,12.0993757 C13.842199,11.9209229 14.347027,11.9506646 14.9007177,12.1886017 C15.4544083,12.4265388 15.9918059,12.7834391 16.5129265,13.2593133 C17.0340471,13.7351874 17.4900207,14.2705379 17.8808612,14.8653806 C18.2717016,15.4602233 18.5648276,16.0253154 18.7602478,16.5606739 C18.955668,17.7503593 19.1510853,19.0589937 19.3465055,20.4866162 C19.5419258,21.9142388 19.7047735,23.4013233 19.8350537,24.9479144 C21.3984155,24.1746188 22.8966147,23.3121098 24.3296964,22.3603615 C25.762778,21.4086131 27.0167057,20.3676539 28.0915169,19.2374528 C29.1663281,18.1072516 29.9968516,16.9324548 30.5831123,15.7130272 C31.169373,14.4935996 31.3647903,13.2295778 31.1693701,11.9209238 C31.0390899,10.9096912 30.5505467,9.98769878 29.7037257,9.15491896 C28.8569047,8.32213915 27.5541228,7.69756365 25.7953407,7.28117375 C21.7566561,6.44839393 18.1414361,6.40378139 14.9495725,7.1473348 C11.7577088,7.89088821 8.69617119,9.12516835 5.76486782,10.8502123 C4.91804684,11.445055 4.13637766,11.8019553 3.41983684,11.9209238 C2.70329601,12.0398924 2.08447458,12.0101507 1.56335398,11.8316978 C1.04223338,11.653245 0.651398796,11.3855698 0.390838496,11.0286642 C0.130278196,10.6717585 0,10.3148583 0,9.95795263 C0.13028015,8.58981436 0.863095002,7.35553422 2.19846654,6.25507517 C3.53383808,5.15461613 4.95061346,4.21775289 6.44883518,3.44445734 C8.40303743,2.55219325 10.8131841,1.808651 13.6793474,1.21380827 C16.5455107,0.618965547 19.4279157,0.395902871 22.3266491,0.544613552 C25.2253824,0.693324234 27.9449398,1.33277057 30.4854027,2.46297175 C33.0258656,3.59317293 34.9800385,5.40741603 36.3479801,7.90575549 C37.5856415,10.8799691 37.8624827,13.5567212 37.1785119,15.9360921 C36.4945411,18.315463 35.2731831,20.4866064 33.514401,22.4495874 C31.755619,24.4125684 29.6711679,26.2119407 27.2609851,27.8477582 C24.8508023,29.4835757 22.5709339,30.985531 20.4213114,32.3536693 C20.5515916,34.9709773 20.6330154,37.5287627 20.6655855,40.0271021 C20.6981555,42.5254416 20.6818707,44.8452934 20.6167307,46.9867272 Z M67.810479,25.840174 C65.2700161,27.2083123 62.534174,28.2641423 59.6028706,29.0076957 C56.6715673,29.7512491 53.512321,30.1230202 50.1250371,30.1230202 C50.2553173,32.2049698 50.9067082,33.8556336 52.0792296,35.0750612 C53.2517509,36.2944888 54.7173806,37.0231602 56.4761627,37.2610973 C57.5184039,37.3800658 58.5769142,37.3503241 59.6517254,37.1718713 C60.7265367,36.9934185 61.7361927,36.7108724 62.6807238,36.3242246 C63.6252549,35.9375769 64.4883479,35.5063224 65.2700288,35.0304482 C66.0517097,34.554574 66.7356703,34.078707 67.3219309,33.6028328 C67.9081916,33.1269586 68.527013,32.8146709 69.1784138,32.6659602 C69.8298145,32.5172495 70.3183578,32.5023786 70.6440581,32.6213472 C71.5560192,32.9187686 71.8817147,33.8110193 71.6211544,35.2981261 C70.5789132,37.2016228 69.0807139,38.8225449 67.1265117,40.160941 C65.1723094,41.4993372 62.9901496,42.3469754 60.5799669,42.703881 C58.4954845,43.0607866 56.3458942,42.9715616 54.1311317,42.4362031 C51.9163691,41.9008446 49.9296267,40.8598855 48.1708446,39.3132944 C46.6726229,37.9451561 45.5326887,36.3391049 44.7510078,34.4950924 C43.9693269,32.65108 43.4807837,30.7476118 43.2853634,28.7846308 C43.0899432,26.9406183 43.2690757,25.1858586 43.8227664,23.520299 C44.376457,21.8547393 45.23955,20.3825257 46.4120714,19.1036138 C47.5845927,17.824702 49.0502224,16.768872 50.8090045,15.9360921 C52.5677865,15.1033123 54.6196681,14.6274453 56.9647108,14.5084767 C59.765734,14.3300239 62.3061588,14.805891 64.5860615,15.9360921 C66.8659641,17.0662933 68.461872,18.6426029 69.373833,20.6650682 C69.8949536,21.7952693 70.0415166,22.7767451 69.8135263,23.6095249 C69.5855361,24.4423048 68.9178603,25.185847 67.810479,25.840174 Z M56.5738723,19.7728085 C55.9224715,19.8917771 55.2222262,20.0999689 54.4731154,20.3973903 C53.7240045,20.6948116 53.040044,21.0665828 52.4212133,21.5127148 C51.8023826,21.9588469 51.2487002,22.4644556 50.7601497,23.0295562 C50.2715991,23.5946568 49.9947579,24.2341031 49.9296179,24.9479144 C51.0369991,24.9479144 52.2583572,24.8586893 53.5937288,24.6802365 C54.9291003,24.5017837 56.2318823,24.278721 57.5021137,24.0110418 C58.7723452,23.7433625 59.9448489,23.4310748 61.0196602,23.0741692 C62.0944714,22.7172635 62.990134,22.3306216 63.7066748,21.9142316 C63.1855542,20.7840305 62.2247525,20.0851007 60.8242409,19.8174215 C59.4237293,19.5497423 58.0069539,19.5348715 56.5738723,19.7728085 Z M100.640913,22.8957172 C101.878574,22.836233 103.116217,23.1039082 104.353878,23.6987509 C105.59154,24.2935936 106.210361,25.215586 106.210361,26.4647558 C106.080081,27.4759884 105.477544,28.1154347 104.402733,28.383114 C103.327922,28.6507932 102.464829,28.7846308 101.813428,28.7846308 C100.510627,28.7846308 99.1101361,28.8143725 97.6119144,28.8738567 C96.1136926,28.933341 94.5829238,29.0225661 93.019562,29.1415346 C92.8892819,31.1045156 92.7752885,32.9485004 92.6775784,34.6735443 C92.5798682,36.3985882 92.4984444,37.9302853 92.4333043,39.2686814 C92.3681642,40.6070776 92.3355947,41.6926492 92.3355947,42.5254291 C92.3355947,43.3582089 92.3681642,43.8043342 92.4333043,43.8638185 C93.8663859,43.6258814 95.4134395,43.2243686 97.0745114,42.659268 C98.7355833,42.0941674 100.39663,41.4695919 102.057702,40.7855228 C103.718774,40.1014537 105.347252,39.3876531 106.943183,38.6440997 C108.539115,37.9005463 110.053599,37.2016166 111.486681,36.5472896 C112.138082,36.2498682 112.740618,36.1606431 113.294309,36.2796117 C113.848,36.3985802 114.18998,36.6662554 114.32026,37.0826453 C114.45054,37.7369723 114.352832,38.539998 114.027131,39.4917463 C113.701431,40.4434947 113.115179,41.3060037 112.268358,42.0792992 C111.291257,42.7931105 110.00476,43.611007 108.408828,44.5330132 C106.812896,45.4550194 105.102995,46.3323993 103.279073,47.1651791 C101.45515,47.9979589 99.6149709,48.7266304 97.7584788,49.3512152 C95.9019867,49.9758001 94.2572244,50.3475712 92.8241428,50.4665398 C90.6745203,50.6449926 89.0460429,50.1096421 87.9386616,48.8604724 C86.8312803,47.6113027 86.2124589,46.0349931 86.0821787,44.1314964 C85.9518986,42.2279997 85.9356138,40.0271146 86.0333239,37.5287751 C86.131034,35.0304357 86.2450275,32.3834253 86.3753076,29.5876645 C85.1376462,29.706633 83.9488576,29.8107289 82.8089063,29.8999553 C81.668955,29.9891817 80.5778751,30.0932776 79.5356339,30.2122462 C78.688813,30.2122462 77.7605808,30.033796 76.7509096,29.6768904 C75.7412385,29.3199848 75.2364105,28.6359259 75.2364105,27.6246933 C75.2364105,27.2677876 75.3992582,26.7919206 75.7249586,26.1970779 C76.050659,25.6022351 76.767189,25.1561098 77.8745703,24.8586884 C80.5453134,24.4422985 83.5091424,24.0853982 86.7661461,23.7879769 C86.9615663,20.9922161 87.1895532,18.2857222 87.4501135,15.6684143 C87.7106738,13.0511063 87.9386606,10.671771 88.1340808,8.53033723 C88.1992209,7.81652595 88.4272078,7.19195046 88.8180482,6.65659201 C89.2088887,6.12123355 89.6322928,5.85355834 90.0882733,5.85355834 C91.1956546,5.79407407 92.2541649,6.04687843 93.2638361,6.61197902 C94.2735073,7.17707961 94.7783353,7.81652595 94.7783353,8.53033723 C94.517775,10.5528025 94.2735034,12.8429126 94.0455131,15.4007364 C93.8175228,17.9585601 93.6058208,20.5758288 93.4104005,23.2526211 C94.713202,23.1336525 95.9671297,23.0592983 97.1722211,23.0295562 C98.3773124,22.999814 99.5335314,22.9552015 100.640913,22.8957172 Z M142.753761,13.794669 C143.014321,15.4602287 143.226023,17.2298592 143.388873,19.1036138 C143.551723,20.9773684 143.682002,22.8659657 143.779712,24.7694625 C143.877422,26.6729592 143.926276,28.516944 143.926276,30.3014722 C143.926276,32.0860003 143.893707,33.6920516 143.828567,35.1196741 C145.913049,36.4283281 147.166977,37.5882541 147.590387,38.5994867 C148.013798,39.6107193 148.062652,40.50297 147.736951,41.2762656 C147.346111,42.3469825 146.645866,42.8972038 145.636195,42.9269459 C144.626523,42.956688 143.470304,42.6444003 142.167503,41.9900733 C141.255542,42.584916 140.213316,43.2243623 139.040795,43.9084315 C137.868274,44.5925006 136.630631,45.2468178 135.327829,45.8714027 C134.025028,46.4959875 132.722246,47.0462088 131.419444,47.522083 C130.116643,47.9979572 128.911569,48.3251158 127.804188,48.5035686 C125.719706,48.8009899 123.846957,48.4440897 122.185885,47.432857 C120.524813,46.4216244 119.401163,44.9047982 118.814903,42.8823329 C118.424062,41.5141946 118.326354,40.1014644 118.521774,38.6440997 C118.717194,37.186735 119.205737,35.7888756 119.987418,34.4504794 C120.769099,33.1120833 121.827609,31.9075448 123.162981,30.8368279 C124.498353,29.766111 126.077976,28.9333437 127.901898,28.338501 C128.357878,28.1600482 128.992985,28.0113397 129.807235,27.8923712 C130.621486,27.7734026 131.468295,27.7287901 132.347686,27.7585322 C133.227077,27.7882743 134.122739,27.9518536 135.0347,28.249275 C135.946661,28.5466964 136.79347,29.0523051 137.575151,29.7661164 C137.575151,28.7548837 137.558866,27.6395704 137.526296,26.4201428 C137.493726,25.2007152 137.444871,23.966435 137.379731,22.7172653 C137.314591,21.4680956 137.233167,20.2932988 137.135457,19.1928398 C137.037747,18.0923807 136.923754,17.1555175 136.793474,16.382222 C136.663193,15.4899579 136.288644,14.9397366 135.669813,14.7315416 C135.050982,14.5233467 134.285598,14.5679592 133.373637,14.8653806 C131.810275,15.3412548 129.98638,16.2632472 127.901898,17.6313854 C125.817415,18.9995237 123.830673,20.4568665 121.941611,22.0034576 C121.35535,22.5388161 120.687674,22.7767496 119.938563,22.7172653 C119.189453,22.657781 118.554346,22.3901058 118.033226,21.9142316 C117.512105,21.4383575 117.218979,20.8881362 117.153839,20.2635513 C117.088699,19.6389665 117.349255,18.9697784 117.935516,18.2559672 C119.042897,17.1852503 120.28054,16.0848077 121.648482,14.9546065 C123.016423,13.8244054 124.449484,12.7983171 125.947705,11.8763108 C127.445927,10.9543046 128.976696,10.1958915 130.540058,9.60104878 C132.103419,9.00620605 133.666758,8.67904746 135.23012,8.61956319 C137.510022,8.56007892 139.268778,9.02107511 140.506439,10.0025656 C141.744101,10.9840561 142.4932,12.2480779 142.753761,13.794669 Z M131.419444,32.978251 C130.572623,33.1567039 129.676961,33.528475 128.73243,34.0935756 C127.787899,34.6586762 126.94109,35.342735 126.191979,36.1457727 C125.442869,36.9488104 124.889186,37.8410611 124.530916,38.8225516 C124.172645,39.8040421 124.156361,40.770647 124.482061,41.7223954 C124.612341,42.079301 124.889182,42.3469762 125.312593,42.5254291 C125.736003,42.7038819 126.208262,42.7336236 126.729382,42.614655 C128.292744,42.3172337 130.067785,41.7372707 132.054557,40.8747487 C134.041329,40.0122268 135.620952,39.0753636 136.793474,38.0641309 C136.793474,37.7072253 136.598056,37.2462291 136.207216,36.6811285 C135.816375,36.1160279 135.360402,35.5509358 134.839281,34.9858352 C134.318161,34.4207346 133.748193,33.9299967 133.129363,33.5136068 C132.510532,33.0972169 131.940565,32.9187668 131.419444,32.978251 Z M161.611718,5.05052467 C161.937418,11.5343104 162.491101,18.2410615 163.272782,25.1709793 C164.054463,32.1008971 164.901271,38.7184231 165.813232,45.023756 C166.008652,47.641064 165.226983,48.9794401 163.468201,49.0389243 C163.07736,49.0389243 162.686526,48.9050867 162.295685,48.6374075 C161.904845,48.3697283 161.54658,48.0276988 161.22088,47.6113089 C160.895179,47.194919 160.585768,46.7487937 160.292638,46.2729195 C159.999508,45.7970453 159.820375,45.3806617 159.755235,45.023756 C159.234115,41.9900581 158.745571,38.7779556 158.289591,35.387352 C157.83361,31.9967485 157.426491,28.591325 157.068221,25.1709793 C156.70995,21.7506336 156.400539,18.4046935 156.139979,15.1330585 C155.879419,11.8614235 155.716571,8.85751277 155.651431,6.12123623 C155.781711,4.69361369 156.009698,3.48907523 156.335398,2.50758473 C156.661099,1.52609424 157.345059,1.06509804 158.3873,1.12458231 C159.494682,1.18406658 160.292636,1.5855794 160.781186,2.32913281 C161.269737,3.07268622 161.546578,3.97980777 161.611718,5.05052467 Z"
                id="Petal"
                fill="#2E8B57"
              />
              <path
                d="M25.3795094,67 L27.988456,73.5217391 L30.6204906,67 L36,67 L29.997114,82 L26.002886,82 L20,67 L25.3795094,67 Z M28.2517986,80 L33,68 L32.3285372,68 L27.9880096,78.9112426 L23.6714628,68 L23,68 L27.7482014,80 L28.2517986,80 Z M37,67 L45.8425,67 L45.8425,70.9355322 L41.7925,70.9355322 L41.7925,72.5997001 L45.775,72.5997001 L45.775,76.3328336 L41.7925,76.3328336 L41.7925,78.0644678 L46,78.0644678 L46,82 L37,82 L37,67 Z M44,80 L44,79.4319527 L39.5752212,79.4319527 L39.5752212,74.2485207 L43.7787611,74.2485207 L43.7787611,73.6804734 L39.5752212,73.6804734 L39.5752212,68.5680473 L44,68.5680473 L44,68 L39,68 L39,80 L44,80 Z M51.6341463,76.4023669 C52.2682959,76.4023669 52.8861759,76.3392511 53.4878049,76.2130178 L55.804878,80 L56.5609756,80 L54.1219512,76.0236686 C55.0000044,75.7238644 55.6991844,75.2623305 56.2195122,74.6390533 C56.73984,74.015776 57,73.2071056 57,72.2130178 C57,71.5187342 56.86179,70.9112452 56.5853659,70.3905325 C56.3089417,69.8698199 55.9308967,69.4319544 55.4512195,69.0769231 C54.9715423,68.7218917 54.4065073,68.4536498 53.7560976,68.2721893 C53.1056878,68.0907289 52.3983778,68 51.6341463,68 L49,68 L49,80 L49.6341463,80 L49.6341463,76.4023669 L51.6341463,76.4023669 Z M50,76 L50,69 L51.7826087,69 C53.1014559,69 54.1340542,69.3040143 54.8804348,69.9120521 C55.6268153,70.5200899 56,71.3865307 56,72.5114007 C56,73.6362706 55.6268153,74.4989112 54.8804348,75.0993485 C54.1340542,75.6997858 53.1014559,76 51.7826087,76 L50,76 Z M47,67 L52.3108348,67 C53.2960381,67 54.2081071,67.127435 55.0470693,67.3823088 C55.8860314,67.6371827 56.6133776,68.0119915 57.2291297,68.5067466 C57.8448817,69.0015017 58.3259308,69.6124401 58.6722913,70.3395802 C59.0186518,71.0667203 59.1918295,71.902544 59.1918295,72.8470765 C59.1918295,73.5967054 59.0840745,74.2338804 58.8685613,74.7586207 C58.6530481,75.2833609 58.4144477,75.7181392 58.1527531,76.0629685 C57.8448771,76.4527756 57.4985218,76.7826073 57.1136767,77.0524738 L60,82 L54.2273535,82 L51.9182948,78.1994003 L51.9182948,82 L47,82 L47,67 Z M52,74 L52.3235294,74 C53.0686312,74 53.7009778,73.8851363 54.2205882,73.6554054 C54.7401987,73.4256745 55,73.0405432 55,72.5 C55,71.9594568 54.7401987,71.5743255 54.2205882,71.3445946 C53.7009778,71.1148637 53.0686312,71 52.3235294,71 L52,71 L52,74 Z M61,79.765625 C61.2343108,79.8125002 61.4853543,79.8515623 61.7531381,79.8828125 C61.9874489,79.9140627 62.2343083,79.9414061 62.4937238,79.9648438 C62.7531394,79.9882814 63.0167351,80 63.2845188,80 C63.7531404,80 64.2092028,79.9492193 64.6527197,79.8476563 C65.0962365,79.7460932 65.4937221,79.5781262 65.8451883,79.34375 C66.1966545,79.1093738 66.4769864,78.8085956 66.6861925,78.4414062 C66.8953985,78.0742169 67,77.6250027 67,77.09375 C67,76.6406227 66.8786623,76.2109395 66.6359833,75.8046875 C66.3933042,75.3984355 66.0836839,75.0078144 65.707113,74.6328125 C65.3305421,74.2578106 64.9288724,73.8984392 64.5020921,73.5546875 C64.0753117,73.2109358 63.6736421,72.863283 63.2970711,72.5117188 C62.9205002,72.1601545 62.6108799,71.8085955 62.3682008,71.4570313 C62.1255218,71.105467 62.0041841,70.7421894 62.0041841,70.3671875 C62.0041841,69.8046847 62.1966508,69.3710953 62.58159,69.0664062 C62.9665291,68.7617172 63.5857698,68.609375 64.4393305,68.609375 C64.5732224,68.609375 64.7112964,68.6132812 64.8535565,68.6210938 C64.9958166,68.6289063 65.1338905,68.6406249 65.2677824,68.65625 C65.4016743,68.6718751 65.5355642,68.6796875 65.6694561,68.6796875 L65.6694561,68.0703125 C65.5523007,68.0703125 65.4267789,68.0625001 65.292887,68.046875 C65.1757316,68.0312499 65.0460258,68.0195313 64.9037657,68.0117188 C64.7615056,68.0039062 64.6150635,68 64.4644351,68 C63.5606649,68 62.8159025,68.1914043 62.2301255,68.5742188 C61.6443485,68.9570332 61.3514644,69.5546834 61.3514644,70.3671875 C61.3514644,70.8046897 61.4728021,71.2148418 61.7154812,71.5976562 C61.9581602,71.9804707 62.2677805,72.3554669 62.6443515,72.7226563 C63.0209224,73.0898456 63.422592,73.4453108 63.8493724,73.7890625 C64.2761528,74.1328142 64.6778224,74.480467 65.0543933,74.8320312 C65.4309642,75.1835955 65.7405846,75.5468731 65.9832636,75.921875 C66.2259426,76.2968769 66.3472803,76.687498 66.3472803,77.09375 C66.3472803,77.8437538 66.0753165,78.4140605 65.5313808,78.8046875 C64.987445,79.1953145 64.2384985,79.390625 63.2845188,79.390625 C62.7154783,79.390625 62.1966551,79.3515629 61.7280335,79.2734375 C61.4769862,79.2421873 61.2343108,79.2031252 61,79.15625 L61,79.765625 Z M60.0470588,76.88 C60.3921586,76.9866672 60.7529393,77.0704759 61.1294118,77.1314286 C61.4431388,77.2076194 61.799998,77.2685712 62.2,77.3142857 C62.600002,77.3600002 63.0039195,77.3828571 63.4117647,77.3828571 C64.1333369,77.3828571 64.4941176,77.1238121 64.4941176,76.6057143 C64.4941176,76.4076181 64.3843148,76.2057153 64.1647059,76 C63.9450969,75.7942847 63.6666684,75.5657155 63.3294118,75.3142857 C62.9921552,75.0628559 62.6313745,74.7847634 62.2470588,74.48 C61.8627432,74.1752366 61.5019625,73.8247639 61.1647059,73.4285714 C60.8274493,73.032379 60.5490207,72.5866691 60.3294118,72.0914286 C60.1098028,71.596188 60,71.0285746 60,70.3885714 C60,69.6723774 60.133332,69.0400027 60.4,68.4914286 C60.666668,67.9428544 61.0352918,67.4857161 61.5058824,67.12 C61.9764729,66.7542839 62.5294086,66.4761914 63.1647059,66.2857143 C63.8000032,66.0952371 64.4784278,66 65.2,66 C65.5764725,66 65.9529393,66.0190474 66.3294118,66.0571429 C66.7058842,66.0952383 67.0431358,66.1295237 67.3411765,66.16 C67.6862762,66.2057145 68.0235278,66.2514283 68.3529412,66.2971429 L68.3529412,70.5714286 C68.2274504,70.5561904 68.0862753,70.5409525 67.9294118,70.5257143 C67.8039209,70.5104761 67.6627459,70.4952382 67.5058824,70.48 C67.3490188,70.4647618 67.1843146,70.4571429 67.0117647,70.4571429 C66.9176466,70.4571429 66.8000007,70.4609523 66.6588235,70.4685714 C66.5176464,70.4761905 66.3843144,70.4952379 66.2588235,70.5257143 C66.1333327,70.5561906 66.0235299,70.6095234 65.9294118,70.6857143 C65.8352936,70.7619051 65.7882353,70.8685707 65.7882353,71.0057143 C65.7882353,71.1276197 65.8941166,71.2799991 66.1058824,71.4628571 C66.3176481,71.6457152 66.5764691,71.8590464 66.8823529,72.1028571 C67.1882368,72.3466679 67.5254884,72.6285698 67.8941176,72.9485714 C68.2627469,73.268573 68.5999985,73.6342837 68.9058824,74.0457143 C69.2117662,74.4571449 69.4705872,74.9219022 69.6823529,75.44 C69.8941187,75.9580978 70,76.5371397 70,77.1771429 C70,77.8476224 69.8901972,78.4761875 69.6705882,79.0628571 C69.4509793,79.6495267 69.1098062,80.1599978 68.6470588,80.5942857 C68.1843114,81.0285736 67.5921605,81.3714273 66.8705882,81.6228571 C66.149016,81.874287 65.2941226,82 64.3058824,82 C63.7098009,82 63.1568653,81.9733336 62.6470588,81.92 C62.1372524,81.8666664 61.6862765,81.8019051 61.2941176,81.7257143 C60.8392134,81.6495234 60.4235313,81.5580958 60.0470588,81.4514286 L60.0470588,76.88 Z M70,67 L75,67 L75,82 L70,82 L70,67 Z M74,80 L74,68 L73,68 L73,80 L74,80 Z M77,74 C77,72.9028517 77.2095217,71.8666715 77.6285714,70.8914286 C78.0476211,69.9161856 78.619044,69.0666703 79.3428571,68.3428571 C80.0666703,67.619044 80.9161856,67.0476211 81.8914286,66.6285714 C82.8666715,66.2095217 83.9028517,66 85,66 C86.0971483,66 87.1333285,66.2095217 88.1085714,66.6285714 C89.0838144,67.0476211 89.9333297,67.619044 90.6571429,68.3428571 C91.380956,69.0666703 91.9523789,69.9161856 92.3714286,70.8914286 C92.7904783,71.8666715 93,72.9028517 93,74 C93,75.0971483 92.7904783,76.1333285 92.3714286,77.1085714 C91.9523789,78.0838144 91.380956,78.9333297 90.6571429,79.6571429 C89.9333297,80.380956 89.0838144,80.9523789 88.1085714,81.3714286 C87.1333285,81.7904783 86.0971483,82 85,82 C83.9028517,82 82.8666715,81.7904783 81.8914286,81.3714286 C80.9161856,80.9523789 80.0666703,80.380956 79.3428571,79.6571429 C78.619044,78.9333297 78.0476211,78.0838144 77.6285714,77.1085714 C77.2095217,76.1333285 77,75.0971483 77,74 Z M79,74 C79,74.8281291 79.1432277,75.6054651 79.4296875,76.3320312 C79.7161473,77.0585974 80.1100235,77.6953098 80.6113281,78.2421875 C81.1126327,78.7890652 81.6962857,79.2187484 82.3623047,79.53125 C83.0283236,79.8437516 83.7408816,80 84.5,80 C85.2591184,80 85.9716764,79.8437516 86.6376953,79.53125 C87.3037143,79.2187484 87.8873673,78.7890652 88.3886719,78.2421875 C88.8899765,77.6953098 89.2838527,77.0585974 89.5703125,76.3320312 C89.8567723,75.6054651 90,74.8281291 90,74 C90,73.1718709 89.8567723,72.3945349 89.5703125,71.6679688 C89.2838527,70.9414026 88.8899765,70.3046902 88.3886719,69.7578125 C87.8873673,69.2109348 87.3037143,68.7812516 86.6376953,68.46875 C85.9716764,68.1562484 85.2591184,68 84.5,68 C83.7408816,68 83.0283236,68.1562484 82.3623047,68.46875 C81.6962857,68.7812516 81.1126327,69.2109348 80.6113281,69.7578125 C80.1100235,70.3046902 79.7161473,70.9414026 79.4296875,71.6679688 C79.1432277,72.3945349 79,73.1718709 79,74 Z M82,74 C82,74.4142878 82.0785706,74.8035696 82.2357143,75.1678571 C82.3928579,75.5321447 82.6071415,75.8499986 82.8785714,76.1214286 C83.1500014,76.3928585 83.4678553,76.6071421 83.8321429,76.7642857 C84.1964304,76.9214294 84.5857122,77 85,77 C85.4142878,77 85.8035696,76.9214294 86.1678571,76.7642857 C86.5321447,76.6071421 86.8499986,76.3928585 87.1214286,76.1214286 C87.3928585,75.8499986 87.6071421,75.5321447 87.7642857,75.1678571 C87.9214294,74.8035696 88,74.4142878 88,74 C88,73.5857122 87.9214294,73.1964304 87.7642857,72.8321429 C87.6071421,72.4678553 87.3928585,72.1500014 87.1214286,71.8785714 C86.8499986,71.6071415 86.5321447,71.3928579 86.1678571,71.2357143 C85.8035696,71.0785706 85.4142878,71 85,71 C84.5857122,71 84.1964304,71.0785706 83.8321429,71.2357143 C83.4678553,71.3928579 83.1500014,71.6071415 82.8785714,71.8785714 C82.6071415,72.1500014 82.3928579,72.4678553 82.2357143,72.8321429 C82.0785706,73.1964304 82,73.5857122 82,74 Z M85.5,80 C84.7347788,80 84.0213801,79.8565232 83.3597826,79.5695652 C82.6981851,79.2826073 82.1163069,78.888046 81.6141304,78.3858696 C81.111954,77.8836931 80.7173927,77.3018149 80.4304348,76.6402174 C80.1434768,75.9786199 80,75.2652212 80,74.5 C80,73.7347788 80.1434768,73.0213801 80.4304348,72.3597826 C80.7173927,71.6981851 81.111954,71.1163069 81.6141304,70.6141304 C82.1163069,70.111954 82.6981851,69.7173927 83.3597826,69.4304348 C84.0213801,69.1434768 84.7347788,69 85.5,69 C86.2652212,69 86.9786199,69.1434768 87.6402174,69.4304348 C88.3018149,69.7173927 88.8836931,70.111954 89.3858696,70.6141304 C89.888046,71.1163069 90.2826073,71.6981851 90.5695652,72.3597826 C90.8565232,73.0213801 91,73.7347788 91,74.5 C91,75.2652212 90.8565232,75.9786199 90.5695652,76.6402174 C90.2826073,77.3018149 89.888046,77.8836931 89.3858696,78.3858696 C88.8836931,78.888046 88.3018149,79.2826073 87.6402174,79.5695652 C86.9786199,79.8565232 86.2652212,80 85.5,80 Z M94,67 L98.0052817,67 L102.216549,72.7796102 L102.216549,67 L107,67 L107,82 L102.971831,82 L98.7834507,76.2428786 L98.7834507,82 L94,82 L94,67 Z M96.6125654,80 L96.6125654,69.0650888 L104.387435,80 L105,80 L105,68 L104.387435,68 L104.387435,78.9349112 L96.6125654,68 L96,68 L96,80 L96.6125654,80 Z M115.775281,74.9098966 C116.089889,74.3190517 116.292134,73.8759247 116.382022,73.5805022 C116.471911,73.2850798 116.516854,73.0044326 116.516854,72.7385524 C116.516854,71.7488872 115.902628,71.254062 114.674157,71.254062 C114.554307,71.254062 114.441948,71.2577548 114.337079,71.2651403 C114.232209,71.2725259 114.134832,71.2836041 114.044944,71.2983752 C113.970037,71.3131463 113.87266,71.3205318 113.752809,71.3205318 L113.752809,67.2215657 C113.962548,67.1772524 114.149812,67.1403251 114.314607,67.1107829 C114.479402,67.0812406 114.640449,67.0590843 114.797753,67.0443131 C114.955057,67.029542 115.119849,67.0184638 115.292135,67.0110783 C115.46442,67.0036927 115.66292,67 115.88764,67 C116.606745,67 117.314603,67.0775472 118.011236,67.232644 C118.707869,67.3877408 119.333331,67.6425388 119.88764,67.9970458 C120.44195,68.3515527 120.891384,68.8242216 121.235955,69.4150665 C121.580526,70.0059114 121.752809,70.7296855 121.752809,71.5864106 C121.752809,71.9852309 121.707866,72.3803525 121.617978,72.7717873 C121.528089,73.163222 121.389514,73.5878855 121.202247,74.0457903 C121.01498,74.5036951 120.775282,75.0169839 120.483146,75.5856721 C120.19101,76.1543603 119.850189,76.8153581 119.460674,77.5686854 L119.168539,78.1225997 L122,78.1225997 L120.719101,82 L112,82 L115.775281,74.9098966 Z M119.82439,80 L120,79.4319527 L116.8,79.4319527 L119.004878,74.3668639 C119.239026,73.8145929 119.430894,73.2781091 119.580488,72.7573964 C119.730082,72.2366838 119.804878,71.7080895 119.804878,71.1715976 C119.804878,70.1301723 119.528458,69.3412256 118.97561,68.8047337 C118.422761,68.2682419 117.710573,68 116.839024,68 C116.8,68 116.764228,68.0039447 116.731707,68.0118343 C116.699187,68.0197239 116.669919,68.0236686 116.643902,68.0236686 L116.585366,68.0236686 L116.585366,68.591716 L116.643902,68.591716 C116.669919,68.591716 116.699187,68.5877712 116.731707,68.5798817 C116.764228,68.5719921 116.8,68.5680473 116.839024,68.5680473 C117.580492,68.5680473 118.175608,68.7928972 118.62439,69.2426036 C119.073173,69.6923099 119.297561,70.343191 119.297561,71.1952663 C119.297561,71.6370831 119.232521,72.0986169 119.102439,72.5798817 C118.972357,73.0611464 118.790245,73.5779065 118.556098,74.1301775 L116,80 L119.82439,80 Z M123,78 L128,78 L128,82 L123,82 L123,78 Z M126,81 L126,80 L124,80 L124,81 L126,81 Z M130.058824,72.8470765 L128,70.4857571 L131.339869,67 L135,67 L135,82 L130.058824,82 L130.058824,72.8470765 Z M132,80 L132,68 L131.2,68 L129,69.9408284 L129.428571,70.3431953 L131.257143,68.8047337 L131.257143,80 L132,80 Z M141.149789,67 L145.07173,67 L145.07173,75.7031484 L146,75.7031484 L146,79.9085457 L145.07173,79.9085457 L145.07173,82 L140.267932,82 L140.267932,79.9085457 L135,79.9085457 L135,78.1094453 L141.149789,67 Z M142.05036,80 L142.05036,77.7988166 L143,77.7988166 L143,77.2307692 L142.05036,77.2307692 L142.05036,68 L141.791367,68 L137,77.7988166 L141.489209,77.7988166 L141.489209,80 L142.05036,80 Z M142,70 L142,77 L138,77 L142,70 Z"
                id="version-2.14"
                fill="#2E8B57"
              />
            </g>
          </svg>
        </div>
      </article>
    )
  }
}

export default withRouter(Loading)

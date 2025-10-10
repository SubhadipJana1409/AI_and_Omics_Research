// (C) Wolfgang Huber 2010-2011

// Script parameters - these are set up by R in the function 'writeReport' when copying the 
//   template for this script from arrayQualityMetrics/inst/scripts into the report.

var highlightInitial = [ false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, true, false, false, true, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false ];
var arrayMetadata    = [ [ "1", "GSM1426071_CD_colon_active_1.CEL.gz", "1", "2013-02-21T09:29:40Z" ], [ "2", "GSM1426072_CD_colon_active_2.CEL.gz", "2", "2010-12-07T10:23:37Z" ], [ "3", "GSM1426073_CD_colon_active_3.CEL.gz", "3", "2010-12-07T10:15:18Z" ], [ "4", "GSM1426074_CD_colon_active_4.CEL.gz", "4", "2013-01-25T10:54:20Z" ], [ "5", "GSM1426075_CD_colon_active_5.CEL.gz", "5", "2013-02-14T10:31:54Z" ], [ "6", "GSM1426076_CD_colon_active_6.CEL.gz", "6", "2013-02-27T09:48:37Z" ], [ "7", "GSM1426077_CD_colon_active_7.CEL.gz", "7", "2013-01-25T10:37:06Z" ], [ "8", "GSM1426078_CD_colon_active_8.CEL.gz", "8", "2013-01-25T09:45:48Z" ], [ "9", "GSM1426079_controle_colon_76.CEL.gz", "9", "2012-07-20T09:41:11Z" ], [ "10", "GSM1426080_controle_colon_77.CEL.gz", "10", "2012-07-20T09:49:48Z" ], [ "11", "GSM1426081_controle_colon_78.CEL.gz", "11", "2012-07-20T10:38:18Z" ], [ "12", "GSM1426082_controle_colon_79.CEL.gz", "12", "2012-07-20T11:04:21Z" ], [ "13", "GSM1426083_controle_colon_80.CEL.gz", "13", "2012-07-20T09:32:31Z" ], [ "14", "GSM1426084_controle_colon_81.CEL.gz", "14", "2012-07-27T09:29:02Z" ], [ "15", "GSM1426085_controle_colon_82.CEL.gz", "15", "2011-11-04T12:51:22Z" ], [ "16", "GSM1426086_controle_colon_83.CEL.gz", "16", "2011-10-19T10:04:51Z" ], [ "17", "GSM1426087_controle_colon_84.CEL.gz", "17", "2011-11-04T10:14:51Z" ], [ "18", "GSM1426088_controle_colon_85.CEL.gz", "18", "2011-10-19T09:10:41Z" ], [ "19", "GSM1426089_controle_colon_86.CEL.gz", "19", "2011-10-19T10:16:18Z" ], [ "20", "GSM1426090_UC_colon_active_105.CEL.gz", "20", "2013-02-14T10:40:25Z" ], [ "21", "GSM1426091_UC_colon_active_106.CEL.gz", "21", "2013-02-15T10:08:58Z" ], [ "22", "GSM1426092_UC_colon_active_107.CEL.gz", "22", "2013-02-15T10:26:12Z" ], [ "23", "GSM1426093_UC_colon_active_108.CEL.gz", "23", "2013-02-15T10:17:40Z" ], [ "24", "GSM1426094_UC_colon_active_109.CEL.gz", "24", "2013-02-15T09:59:59Z" ], [ "25", "GSM1426095_UC_colon_active_110.CEL.gz", "25", "2012-10-30T11:28:55Z" ], [ "26", "GSM1426096_UC_colon_active_111.CEL.gz", "26", "2012-07-20T10:55:25Z" ], [ "27", "GSM1426097_UC_colon_active_112.CEL.gz", "27", "2012-10-19T10:20:48Z" ], [ "28", "GSM1426098_UC_colon_active_113.CEL.gz", "28", "2013-02-15T11:27:15Z" ], [ "29", "GSM1426099_UC_colon_active_114.CEL.gz", "29", "2012-08-03T09:18:49Z" ], [ "30", "GSM1426100_UC_colon_active_115.CEL.gz", "30", "2012-08-03T10:22:31Z" ], [ "31", "GSM1426101_UC_colon_active_116.CEL.gz", "31", "2013-02-21T09:38:19Z" ], [ "32", "GSM1426102_UC_colon_active_117.CEL.gz", "32", "2012-10-19T09:17:27Z" ], [ "33", "GSM1426103_UC_colon_active_118.CEL.gz", "33", "2012-11-09T10:02:31Z" ], [ "34", "GSM1426104_UC_colon_active_119.CEL.gz", "34", "2012-10-30T10:06:23Z" ], [ "35", "GSM1426105_UC_colon_active_120.CEL.gz", "35", "2012-10-12T10:21:58Z" ], [ "36", "GSM1426106_UC_colon_active_121.CEL.gz", "36", "2012-10-12T09:32:11Z" ], [ "37", "GSM1426107_UC_colon_active_122.CEL.gz", "37", "2012-07-27T10:29:39Z" ], [ "38", "GSM1426108_UC_colon_active_123.CEL.gz", "38", "2012-08-03T10:04:51Z" ], [ "39", "GSM1426109_UC_colon_active_124.CEL.gz", "39", "2012-10-19T09:00:22Z" ], [ "40", "GSM1426110_UC_colon_active_125.CEL.gz", "40", "2012-10-12T10:04:51Z" ], [ "41", "GSM1426111_UC_colon_active_126.CEL.gz", "41", "2012-07-27T10:12:45Z" ], [ "42", "GSM1426112_UC_colon_active_127.CEL.gz", "42", "2010-09-24T08:53:23Z" ], [ "43", "GSM1426113_UC_colon_active_128.CEL.gz", "43", "2010-09-24T10:22:31Z" ], [ "44", "GSM1426114_UC_colon_active_129.CEL.gz", "44", "2010-08-20T10:22:22Z" ], [ "45", "GSM1426115_UC_colon_active_130.CEL.gz", "45", "2012-07-06T11:37:49Z" ], [ "46", "GSM1426116_UC_colon_active_131.CEL.gz", "46", "2010-08-20T10:40:14Z" ], [ "47", "GSM1426117_UC_colon_active_132.CEL.gz", "47", "2011-03-18T11:24:59Z" ], [ "48", "GSM1426118_UC_colon_active_133.CEL.gz", "48", "2011-03-18T11:34:16Z" ], [ "49", "GSM1426119_UC_colon_active_134.CEL.gz", "49", "2011-03-11T11:28:46Z" ], [ "50", "GSM1426120_UC_colon_active_135.CEL.gz", "50", "2011-03-11T11:37:31Z" ], [ "51", "GSM1426121_UC_colon_active_136.CEL.gz", "51", "2011-03-11T11:46:31Z" ], [ "52", "GSM1426122_UC_colon_active_137.CEL.gz", "52", "2011-08-17T09:01:18Z" ], [ "53", "GSM1426123_UC_colon_active_138.CEL.gz", "53", "2012-07-06T11:20:29Z" ], [ "54", "GSM1426124_UC_colon_active_139.CEL.gz", "54", "2012-07-06T10:56:53Z" ], [ "55", "GSM1426125_UC_colon_active_140.CEL.gz", "55", "2012-07-19T08:16:33Z" ], [ "56", "GSM1426126_UC_colon_active_141.CEL.gz", "56", "2012-10-05T11:16:46Z" ], [ "57", "GSM1426127_UC_colon_active_142.CEL.gz", "57", "2012-10-05T11:42:14Z" ], [ "58", "GSM1426128_UC_colon_active_143.CEL.gz", "58", "2012-07-26T08:12:43Z" ], [ "59", "GSM1426129_UC_colon_active_144.CEL.gz", "59", "2012-10-12T11:30:43Z" ], [ "60", "GSM1426130_UC_colon_active_145.CEL.gz", "60", "2012-07-26T08:30:24Z" ], [ "61", "GSM1426131_UC_colon_active_146.CEL.gz", "61", "2012-09-28T08:21:54Z" ], [ "62", "GSM1426132_UC_colon_active_147.CEL.gz", "62", "2012-07-26T10:00:40Z" ], [ "63", "GSM1426133_UC_colon_active_148.CEL.gz", "63", "2012-07-26T09:34:32Z" ], [ "64", "GSM1426134_UC_colon_active_149.CEL.gz", "64", "2012-07-27T09:11:43Z" ], [ "65", "GSM1426135_UC_colon_active_150.CEL.gz", "65", "2012-08-02T08:37:07Z" ], [ "66", "GSM1426136_UC_colon_active_151.CEL.gz", "66", "2012-10-11T08:24:33Z" ], [ "67", "GSM1426137_UC_colon_active_152.CEL.gz", "67", "2012-08-02T09:36:35Z" ], [ "68", "GSM1426138_UC_colon_active_153.CEL.gz", "68", "2012-10-11T08:41:45Z" ], [ "69", "GSM1426139_UC_colon_active_154.CEL.gz", "69", "2012-10-05T08:56:15Z" ], [ "70", "GSM1426140_UC_colon_active_155.CEL.gz", "70", "2012-10-05T09:13:20Z" ], [ "71", "GSM1426141_UC_colon_active_156.CEL.gz", "71", "2012-08-02T10:02:43Z" ], [ "72", "GSM1426142_UC_colon_active_157.CEL.gz", "72", "2012-10-11T09:51:35Z" ], [ "73", "GSM1426143_UC_colon_active_158.CEL.gz", "73", "2012-10-05T10:30:19Z" ], [ "74", "GSM1426144_UC_colon_active_159.CEL.gz", "74", "2012-10-04T08:52:16Z" ], [ "75", "GSM1426145_UC_colon_active_160.CEL.gz", "75", "2012-09-13T08:51:09Z" ], [ "76", "GSM1426146_UC_colon_active_161.CEL.gz", "76", "2012-10-04T09:44:09Z" ], [ "77", "GSM1426147_UC_colon_active_162.CEL.gz", "77", "2012-09-13T09:52:56Z" ], [ "78", "GSM1426148_UC_colon_active_163.CEL.gz", "78", "2012-09-14T08:57:19Z" ], [ "79", "GSM1426149_UC_colon_active_164.CEL.gz", "79", "2012-09-14T09:49:20Z" ], [ "80", "GSM1426150_UC_colon_active_165.CEL.gz", "80", "2012-10-04T10:01:17Z" ], [ "81", "GSM1426151_UC_colon_active_166.CEL.gz", "81", "2013-01-17T10:07:15Z" ], [ "82", "GSM1426152_UC_colon_active_167.CEL.gz", "82", "2013-01-24T09:34:56Z" ], [ "83", "GSM1426153_UC_colon_active_168.CEL.gz", "83", "2013-01-18T10:30:47Z" ], [ "84", "GSM1426154_UC_colon_active_169.CEL.gz", "84", "2013-01-17T10:57:39Z" ], [ "85", "GSM1426155_UC_colon_active_170.CEL.gz", "85", "2013-01-17T10:40:20Z" ], [ "86", "GSM1426156_UC_colon_active_171.CEL.gz", "86", "2013-01-24T09:17:49Z" ], [ "87", "GSM1426157_UC_colon_active_172.CEL.gz", "87", "2013-01-18T10:12:51Z" ], [ "88", "GSM1426158_UC_colon_active_173.CEL.gz", "88", "2013-01-24T10:25:38Z" ], [ "89", "GSM1426159_UC_colon_active_174.CEL.gz", "89", "2013-01-18T11:25:41Z" ], [ "90", "GSM1426160_UC_colon_active_175.CEL.gz", "90", "2013-01-24T10:42:52Z" ], [ "91", "GSM1426161_UC_colon_active_176.CEL.gz", "91", "2013-01-17T09:49:52Z" ], [ "92", "GSM1426162_UC_colon_active_177.CEL.gz", "92", "2013-01-18T11:08:26Z" ], [ "93", "GSM1426163_UC_colon_active_178.CEL.gz", "93", "2013-01-25T09:28:38Z" ], [ "94", "GSM1426164_UC_colon_inactive_179.CEL.gz", "94", "2013-07-02T09:15:17Z" ], [ "95", "GSM1426165_UC_colon_inactive_180.CEL.gz", "95", "2013-07-04T09:08:16Z" ], [ "96", "GSM1426166_UC_colon_inactive_181.CEL.gz", "96", "2012-11-08T09:51:52Z" ], [ "97", "GSM1426167_UC_colon_inactive_182.CEL.gz", "97", "2012-10-30T09:49:04Z" ], [ "98", "GSM1426168_UC_colon_inactive_183.CEL.gz", "98", "2013-07-04T09:38:41Z" ], [ "99", "GSM1426169_UC_colon_inactive_184.CEL.gz", "99", "2012-11-08T10:59:50Z" ], [ "100", "GSM1426170_UC_colon_inactive_185.CEL.gz", "100", "2012-11-08T10:42:24Z" ], [ "101", "GSM1426171_UC_colon_inactive_186.CEL.gz", "101", "2012-11-08T11:08:34Z" ], [ "102", "GSM1426172_UC_colon_inactive_187.CEL.gz", "102", "2012-10-30T11:11:31Z" ], [ "103", "GSM1426173_UC_colon_inactive_188.CEL.gz", "103", "2012-10-19T10:38:11Z" ], [ "104", "GSM1426174_UC_colon_inactive_189.CEL.gz", "104", "2012-11-09T10:20:14Z" ], [ "105", "GSM1426175_UC_colon_inactive_190.CEL.gz", "105", "2010-08-27T10:41:47Z" ], [ "106", "GSM1426176_UC_colon_inactive_191.CEL.gz", "106", "2010-08-20T10:48:44Z" ], [ "107", "GSM1426177_UC_colon_inactive_192.CEL.gz", "107", "2010-07-09T09:21:30Z" ], [ "108", "GSM1426178_UC_colon_inactive_193.CEL.gz", "108", "2010-08-27T10:50:31Z" ], [ "109", "GSM1426179_UC_colon_inactive_194.CEL.gz", "109", "2010-07-16T09:34:57Z" ], [ "110", "GSM1426180_UC_colon_inactive_195.CEL.gz", "110", "2010-09-01T08:54:14Z" ], [ "111", "GSM1426181_UC_colon_inactive_196.CEL.gz", "111", "2010-07-16T10:39:05Z" ], [ "112", "GSM1426182_UC_colon_inactive_197.CEL.gz", "112", "2010-07-16T10:47:47Z" ], [ "113", "GSM1426183_UC_colon_inactive_198.CEL.gz", "113", "2010-08-27T10:24:20Z" ], [ "114", "GSM1426184_UC_colon_inactive_199.CEL.gz", "114", "2011-03-11T12:51:39Z" ], [ "115", "GSM1426185_UC_colon_inactive_200.CEL.gz", "115", "2011-03-11T13:09:24Z" ], [ "116", "GSM1426186_UC_colon_inactive_201.CEL.gz", "116", "2013-02-27T11:11:38Z" ], [ "117", "GSM1945759_CD_ileum_active_9.CEL.gz", "117", "2013-02-21T09:55:38Z" ], [ "118", "GSM1945760_CD_ileum_active_10.CEL.gz", "118", "2012-05-31T10:58:31Z" ], [ "119", "GSM1945761_CD_ileum_active_11.CEL.gz", "119", "2011-10-06T09:42:37Z" ], [ "120", "GSM1945762_CD_ileum_active_12.CEL.gz", "120", "2012-05-21T21:03:19Z" ], [ "121", "GSM1945763_CD_ileum_active_13.CEL.gz", "121", "2011-09-14T09:15:27Z" ], [ "122", "GSM1945764_CD_ileum_active_14.CEL.gz", "122", "2010-11-19T09:48:57Z" ], [ "123", "GSM1945765_CD_ileum_active_15.CEL.gz", "123", "2010-11-16T10:02:44Z" ], [ "124", "GSM1945766_CD_ileum_active_16.CEL.gz", "124", "2010-12-07T12:26:44Z" ], [ "125", "GSM1945767_CD_ileum_active_17.CEL.gz", "125", "2013-02-27T10:06:23Z" ], [ "126", "GSM1945768_CD_ileum_active_18.CEL.gz", "126", "2010-11-19T09:57:56Z" ], [ "127", "GSM1945769_CD_ileum_active_19.CEL.gz", "127", "2010-11-10T11:06:02Z" ], [ "128", "GSM1945770_CD_ileum_active_20.CEL.gz", "128", "2010-11-26T10:16:17Z" ], [ "129", "GSM1945771_CD_ileum_active_21.CEL.gz", "129", "2010-10-29T10:35:42Z" ], [ "130", "GSM1945772_CD_ileum_active_22.CEL.gz", "130", "2010-11-19T09:39:47Z" ], [ "131", "GSM1945773_CD_ileum_active_23.CEL.gz", "131", "2010-11-16T09:44:54Z" ], [ "132", "GSM1945774_CD_ileum_active_24.CEL.gz", "132", "2010-11-16T09:53:38Z" ], [ "133", "GSM1945775_CD_ileum_active_25.CEL.gz", "133", "2010-11-10T10:10:12Z" ], [ "134", "GSM1945776_CD_ileum_active_26.CEL.gz", "134", "2010-11-26T10:25:05Z" ], [ "135", "GSM1945777_CD_ileum_active_27.CEL.gz", "135", "2010-11-19T10:06:38Z" ], [ "136", "GSM1945778_CD_ileum_active_28.CEL.gz", "136", "2010-11-16T11:05:19Z" ], [ "137", "GSM1945779_CD_ileum_active_29.CEL.gz", "137", "2010-11-16T11:23:14Z" ], [ "138", "GSM1945780_CD_ileum_active_30.CEL.gz", "138", "2010-11-26T12:00:26Z" ], [ "139", "GSM1945781_CD_ileum_active_31.CEL.gz", "139", "2010-11-10T12:50:18Z" ], [ "140", "GSM1945782_CD_ileum_active_32.CEL.gz", "140", "2010-11-19T12:14:04Z" ], [ "141", "GSM1945783_CD_ileum_active_33.CEL.gz", "141", "2010-12-07T11:07:35Z" ], [ "142", "GSM1945784_CD_ileum_active_34.CEL.gz", "142", "2010-12-07T11:16:19Z" ], [ "143", "GSM1945785_CD_ileum_active_35.CEL.gz", "143", "2011-02-18T09:26:11Z" ], [ "144", "GSM1945786_CD_ileum_active_36.CEL.gz", "144", "2011-02-18T09:44:22Z" ], [ "145", "GSM1945787_CD_ileum_active_37.CEL.gz", "145", "2011-04-01T09:39:57Z" ], [ "146", "GSM1945788_CD_ileum_active_38.CEL.gz", "146", "2011-04-01T09:00:38Z" ], [ "147", "GSM1945789_CD_ileum_active_39.CEL.gz", "147", "2011-08-17T10:17:59Z" ], [ "148", "GSM1945790_CD_ileum_active_40.CEL.gz", "148", "2011-08-17T11:33:23Z" ], [ "149", "GSM1945791_CD_ileum_active_41.CEL.gz", "149", "2011-09-14T09:33:30Z" ], [ "150", "GSM1945792_CD_ileum_active_42.CEL.gz", "150", "2011-09-14T08:23:01Z" ], [ "151", "GSM1945793_CD_ileum_active_43.CEL.gz", "151", "2011-09-14T09:43:43Z" ], [ "152", "GSM1945794_CD_ileum_active_44.CEL.gz", "152", "2011-09-30T09:07:39Z" ], [ "153", "GSM1945795_CD_ileum_active_45.CEL.gz", "153", "2011-10-06T08:39:59Z" ], [ "154", "GSM1945796_CD_ileum_active_46.CEL.gz", "154", "2011-10-06T08:48:48Z" ], [ "155", "GSM1945797_CD_ileum_active_47.CEL.gz", "155", "2011-11-04T11:27:44Z" ], [ "156", "GSM1945798_CD_ileum_active_48.CEL.gz", "156", "2012-05-21T21:29:49Z" ], [ "157", "GSM1945799_CD_ileum_active_49.CEL.gz", "157", "2012-05-21T22:29:01Z" ], [ "158", "GSM1945800_CD_ileum_active_50.CEL.gz", "158", "2012-05-30T09:18:26Z" ], [ "159", "GSM1945801_CD_ileum_active_51.CEL.gz", "159", "2012-05-30T09:27:28Z" ], [ "160", "GSM1945802_CD_ileum_active_52.CEL.gz", "160", "2012-05-30T10:18:03Z" ], [ "161", "GSM1945803_CD_ileum_active_53.CEL.gz", "161", "2012-05-30T11:26:38Z" ], [ "162", "GSM1945804_CD_ileum_active_54.CEL.gz", "162", "2012-05-30T11:35:26Z" ], [ "163", "GSM1945805_CD_ileum_active_55.CEL.gz", "163", "2012-05-30T11:52:58Z" ], [ "164", "GSM1945806_CD_ileum_active_56.CEL.gz", "164", "2013-02-14T09:26:09Z" ], [ "165", "GSM1945807_CD_ileum_active_57.CEL.gz", "165", "2012-05-31T09:28:46Z" ], [ "166", "GSM1945808_CD_ileum_active_58.CEL.gz", "166", "2013-02-14T09:34:35Z" ], [ "167", "GSM1945809_CD_ileum_active_59.CEL.gz", "167", "2012-07-06T09:21:01Z" ], [ "168", "GSM1945810_CD_ileum_inactive_60.CEL.gz", "168", "2011-08-17T11:41:46Z" ], [ "169", "GSM1945811_CD_ileum_inactive_61.CEL.gz", "169", "2010-11-10T11:23:51Z" ], [ "170", "GSM1945812_CD_ileum_inactive_62.CEL.gz", "170", "2010-11-10T11:32:47Z" ], [ "171", "GSM1945813_CD_ileum_inactive_63.CEL.gz", "171", "2011-01-27T11:12:41Z" ], [ "172", "GSM1945814_CD_ileum_inactive_64.CEL.gz", "172", "2011-02-18T10:34:59Z" ], [ "173", "GSM1945815_CD_ileum_inactive_65.CEL.gz", "173", "2011-04-01T08:34:00Z" ], [ "174", "GSM1945816_CD_ileum_inactive_66.CEL.gz", "174", "2011-05-27T09:49:37Z" ], [ "175", "GSM1945817_CD_ileum_inactive_67.CEL.gz", "175", "2011-05-27T08:48:10Z" ], [ "176", "GSM1945818_CD_ileum_inactive_68.CEL.gz", "176", "2011-05-27T09:40:32Z" ], [ "177", "GSM1945819_CD_ileum_inactive_69.CEL.gz", "177", "2011-05-27T08:56:48Z" ], [ "178", "GSM1945820_CD_ileum_inactive_70.CEL.gz", "178", "2011-08-17T08:44:06Z" ], [ "179", "GSM1945821_CD_ileum_inactive_71.CEL.gz", "179", "2011-09-30T08:49:21Z" ], [ "180", "GSM1945822_CD_ileum_inactive_72.CEL.gz", "180", "2011-11-04T09:56:34Z" ], [ "181", "GSM1945823_CD_ileum_inactive_73.CEL.gz", "181", "2011-11-04T09:47:14Z" ], [ "182", "GSM1945824_CD_ileum_inactive_74.CEL.gz", "182", "2012-05-30T10:09:16Z" ], [ "183", "GSM1945825_CD_ileum_inactive_75.CEL.gz", "183", "2012-05-31T09:02:10Z" ], [ "184", "GSM1945826_controle_ileum_87.CEL.gz", "184", "2010-11-16T10:11:19Z" ], [ "185", "GSM1945827_controle_ileum_88.CEL.gz", "185", "2010-10-29T11:02:19Z" ], [ "186", "GSM1945828_controle_ileum_89.CEL.gz", "186", "2010-11-16T10:56:17Z" ], [ "187", "GSM1945829_controle_ileum_90.CEL.gz", "187", "2010-11-19T10:57:48Z" ], [ "188", "GSM1945830_controle_ileum_91.CEL.gz", "188", "2010-10-29T10:53:43Z" ], [ "189", "GSM1945831_controle_ileum_92.CEL.gz", "189", "2010-11-19T10:48:49Z" ], [ "190", "GSM1945832_controle_ileum_93.CEL.gz", "190", "2010-11-16T12:26:23Z" ], [ "191", "GSM1945833_controle_ileum_94.CEL.gz", "191", "2010-11-16T12:17:51Z" ], [ "192", "GSM1945834_controle_ileum_95.CEL.gz", "192", "2010-11-26T13:05:01Z" ], [ "193", "GSM1945835_controle_ileum_96.CEL.gz", "193", "2010-11-26T13:25:38Z" ], [ "194", "GSM1945836_controle_ileum_97.CEL.gz", "194", "2010-11-16T12:35:15Z" ] ];
var svgObjectNames   = [ "pca", "dens" ];

var cssText = ["stroke-width:1; stroke-opacity:0.4",
               "stroke-width:3; stroke-opacity:1" ];

// Global variables - these are set up below by 'reportinit'
var tables;             // array of all the associated ('tooltips') tables on the page
var checkboxes;         // the checkboxes
var ssrules;


function reportinit() 
{
 
    var a, i, status;

    /*--------find checkboxes and set them to start values------*/
    checkboxes = document.getElementsByName("ReportObjectCheckBoxes");
    if(checkboxes.length != highlightInitial.length)
	throw new Error("checkboxes.length=" + checkboxes.length + "  !=  "
                        + " highlightInitial.length="+ highlightInitial.length);
    
    /*--------find associated tables and cache their locations------*/
    tables = new Array(svgObjectNames.length);
    for(i=0; i<tables.length; i++) 
    {
        tables[i] = safeGetElementById("Tab:"+svgObjectNames[i]);
    }

    /*------- style sheet rules ---------*/
    var ss = document.styleSheets[0];
    ssrules = ss.cssRules ? ss.cssRules : ss.rules; 

    /*------- checkboxes[a] is (expected to be) of class HTMLInputElement ---*/
    for(a=0; a<checkboxes.length; a++)
    {
	checkboxes[a].checked = highlightInitial[a];
        status = checkboxes[a].checked; 
        setReportObj(a+1, status, false);
    }

}


function safeGetElementById(id)
{
    res = document.getElementById(id);
    if(res == null)
        throw new Error("Id '"+ id + "' not found.");
    return(res)
}

/*------------------------------------------------------------
   Highlighting of Report Objects 
 ---------------------------------------------------------------*/
function setReportObj(reportObjId, status, doTable)
{
    var i, j, plotObjIds, selector;

    if(doTable) {
	for(i=0; i<svgObjectNames.length; i++) {
	    showTipTable(i, reportObjId);
	} 
    }

    /* This works in Chrome 10, ssrules will be null; we use getElementsByClassName and loop over them */
    if(ssrules == null) {
	elements = document.getElementsByClassName("aqm" + reportObjId); 
	for(i=0; i<elements.length; i++) {
	    elements[i].style.cssText = cssText[0+status];
	}
    } else {
    /* This works in Firefox 4 */
    for(i=0; i<ssrules.length; i++) {
        if (ssrules[i].selectorText == (".aqm" + reportObjId)) {
		ssrules[i].style.cssText = cssText[0+status];
		break;
	    }
	}
    }

}

/*------------------------------------------------------------
   Display of the Metadata Table
  ------------------------------------------------------------*/
function showTipTable(tableIndex, reportObjId)
{
    var rows = tables[tableIndex].rows;
    var a = reportObjId - 1;

    if(rows.length != arrayMetadata[a].length)
	throw new Error("rows.length=" + rows.length+"  !=  arrayMetadata[array].length=" + arrayMetadata[a].length);

    for(i=0; i<rows.length; i++) 
 	rows[i].cells[1].innerHTML = arrayMetadata[a][i];
}

function hideTipTable(tableIndex)
{
    var rows = tables[tableIndex].rows;

    for(i=0; i<rows.length; i++) 
 	rows[i].cells[1].innerHTML = "";
}


/*------------------------------------------------------------
  From module 'name' (e.g. 'density'), find numeric index in the 
  'svgObjectNames' array.
  ------------------------------------------------------------*/
function getIndexFromName(name) 
{
    var i;
    for(i=0; i<svgObjectNames.length; i++)
        if(svgObjectNames[i] == name)
	    return i;

    throw new Error("Did not find '" + name + "'.");
}


/*------------------------------------------------------------
  SVG plot object callbacks
  ------------------------------------------------------------*/
function plotObjRespond(what, reportObjId, name)
{

    var a, i, status;

    switch(what) {
    case "show":
	i = getIndexFromName(name);
	showTipTable(i, reportObjId);
	break;
    case "hide":
	i = getIndexFromName(name);
	hideTipTable(i);
	break;
    case "click":
        a = reportObjId - 1;
	status = !checkboxes[a].checked;
	checkboxes[a].checked = status;
	setReportObj(reportObjId, status, true);
	break;
    default:
	throw new Error("Invalid 'what': "+what)
    }
}

/*------------------------------------------------------------
  checkboxes 'onchange' event
------------------------------------------------------------*/
function checkboxEvent(reportObjId)
{
    var a = reportObjId - 1;
    var status = checkboxes[a].checked;
    setReportObj(reportObjId, status, true);
}


/*------------------------------------------------------------
  toggle visibility
------------------------------------------------------------*/
function toggle(id){
  var head = safeGetElementById(id + "-h");
  var body = safeGetElementById(id + "-b");
  var hdtxt = head.innerHTML;
  var dsp;
  switch(body.style.display){
    case 'none':
      dsp = 'block';
      hdtxt = '-' + hdtxt.substr(1);
      break;
    case 'block':
      dsp = 'none';
      hdtxt = '+' + hdtxt.substr(1);
      break;
  }  
  body.style.display = dsp;
  head.innerHTML = hdtxt;
}

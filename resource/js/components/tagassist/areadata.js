/*
*ʡ��������
*/
(function (){
	var areas={
		"COUNTRIES":[["�й�","080"],["���","00862"],["����","001"]],
		"MAIN_CITIES":"����,�Ϻ�,����,����,����".split(","),
		"PROVINCES":[],
		"CITIES":{},
		"COUNTIES":{}
	}
	var sData="����::������:������,������,������,������,������,��̨��,ʯ��ɽ��,������,��ͷ����,��ɽ��,ͨ����,˳����,��ƽ��,������,������,ƽ����,������,������;;�Ϻ�::�Ϻ���:������,¬����,�����,������,������,������,բ����,�����,������,������,��ɽ��,�ζ���,�ֶ�����,��ɽ��,�ɽ���,������,�ϻ���,������,������;;���::�����:��ƽ��,�Ӷ���,������,�Ͽ���,�ӱ���,������,������,������,�����,������,������,������,������,������,������,������,������,����;;����::������:������,������,������,��ɿ���,������,ɳƺ����,��������,�ϰ���,������,��ʢ��,˫����,�山��,������,ǭ����,������,�뽭��,������,ͭ����,������,�ٲ���,�ɽ��,��ƽ��,�ǿ���,�ᶼ��,�潭��,��¡��,����,����,������,�����,��ɽ��,��Ϫ��,ʯ��������������,��ɽ����������������,��������������������,��ˮ����������������,������,�ϴ���,������,�ϴ���;;����ʡ::�Ϸ���:������,®����,��ɽ��,������,������,�ʶ���,������;������:ӭ����,�����,����,������,������,Ǳɽ��,̫����,������,������,������,ͩ����;������:���Ӻ���,��ɽ��,������,������,��Զ��,�����,������;������:�۳���,������,�ɳ���,������;������:�ӳ���,®����,��Ϊ��,��ɽ��,����;������:�����,������,ʯ̨��,������;������:������,������,������,ȫ����,��Զ��,������,�쳤��,������;������:�����,򣶫��,�Ȫ��,��Ȫ��,̫����,������,�����,������;������:�ż���,��ɽ��,��ɽ��,�Ϫ��;������:��ͨ��,�������,л�Ҽ���,�˹�ɽ��,�˼���,��̨��;��ɽ��:��Ϫ��,��ɽ��,������,���,������,����,������;������:����,ԣ����,����,������,�����,��կ��,��ɽ��;����ɽ��:���ׯ��,��ɽ��,��ɽ��,��Ϳ��;������:ܭ����,��ɽ��,����,�����,����;ͭ����:ͭ��ɽ��,ʨ��ɽ��,����,ͭ����;�ߺ���:������,������,������,𯽭��,�ߺ���,������,������;������:������,��Ϫ��,�����,����,��Ϫ��,캵���,������;;����ʡ::������:��¥��,̨����,��ɽ��,��β��,������,������,������,��Դ��,������,��̩��,ƽ̶��,������,������;������:������,��͡��,������,�Ϻ���,��ƽ��,������,��ƽ��;��ƽ��:��ƽ��,˳����,�ֳ���,������,��Ϫ��,������,������,����ɽ��,�����,������;������:������,ϼ����,������,������,������,������,������,������,������;������:������,������,�����,������,������;Ȫ����:�����,������,�彭��,Ȫ����,�ݰ���,��Ϫ��,������,�»���,������,ʯʨ��,������,�ϰ���;������:÷����,��Ԫ��,��Ϫ��,������,������,������,��Ϫ��,ɳ��,������,̩����,������,������;������:˼����,������,������,������,ͬ����,�谲��;������:ܼ����,������,������,������,گ����,��̩��,��ɽ��,�Ͼ���,ƽ����,������,������;;����ʡ::������:�ǹ���,�������,������,������,�����,������,������,������;������:������,ƽ����,��Զ��,������,��̩��;������:������,ͨμ��,¤����,μԴ��,�����,����,���;���ϲ���������:������,��̶��,׿����,������,������,������,µ����,�ĺ���;��������:;�����:����,������;��Ȫ��:������,������,������,�౱�ɹ���������,��������������������,������,�ػ���;���Ļ���������:������,������,������,������,�����,������,������������,��ʯɽ�����嶫����������������;¤����:�䶼��,����,����,崲���,����,������,����,����,������;ƽ����:�����,������,��̨��,������,��ͤ��,ׯ����,������;������:������,�����,����,������,��ˮ��,������,����,��ԭ��;��ˮ��:�س���,������,��ˮ��,�ذ���,�ʹ���,��ɽ��,�żҴ�����������;������:������,������,������,��ף����������;��Ҵ��:������,����ԣ����������,������,������,��̨��,ɽ����;;�㶫ʡ::������:������,Խ����,������,�����,������,������,��خ��,������,��ɳ��,�ܸ���,������,�ӻ���,��ɽ��,������;������:������,������,��ƽ��;��ݸ��:;��ɽ��:������,�Ϻ���,˳����,��ˮ��,������;��Դ��:Դ����,�Ͻ���,������,��ƽ��,��ƽ��,��Դ��;������:�ݳ���,������,������,�ݶ���,������;������:���,������,�»���,̨ɽ��,��ƽ��,��ɽ��,��ƽ��;������:�ų���,�Ҷ���,������,������,������;ï����:ï����,ï����,�����,������,������,������;÷����:;÷����:÷��,������,��˳��,�廪��,ƽԶ��,������,������;��Զ��:�����,�����,��ɽ��,��ɽ׳������������,��������������,������,Ӣ����,������;��ͷ��:������,��ƽ��,婽���,������,������,�κ���,�ϰ���;��β��:����,������,½����,½����;�ع���:�佭��,䥽���,������,ʼ����,�ʻ���,��Դ��,��Դ����������,�·���,�ֲ���,������;������:�޺���,������,��ɽ��,������,������,������;������:������,������,������,������;�Ƹ���:�Ƴ���,������,������,�ư���,�޶���;տ����:�࿲��,ϼɽ��,��ͷ��,������,��Ϫ��,������,������,������,�⴨��;������:������,������,������,������,�⿪��,������,��Ҫ��,�Ļ���;��ɽ��:;�麣��:������,������,������;;����׳��������::������:������,������,������,��������,������,������,������,¡����,��ɽ��,������,������,����;��ɫ��:�ҽ���,������,�ﶫ��,ƽ����,�±���,������,������,������,��ҵ��,������,������,¡�ָ���������;������:������,������,��ɽ����,������;������:������,������,������,������,������,�����,ƾ����;���Ǹ���:�ۿ���,������,��˼��,������;�����:�۱���,������,������,ƽ����,��ƽ��;������:�����,������,��ɽ��,������,��ɽ��,��˷��,�ٹ���,�鴨��,ȫ����,�˰���,������,������,��ʤ����������,��Դ��,ƽ����,������,��������������;�ӳ���:��ǽ���,�ϵ���,�����,��ɽ��,������,�޳�������������,����ë����������,��������������,��������������,������������,������;������:�˲���,��ƽ��,��ɽ��,��������������;������:�˱���,�ó���,������,������,��������������,��ɽ��;������:������,�����,������,������,������,������,¹կ��,�ڰ���,��ˮ����������,��������������;������:������,�ձ���,��ɽ��,�ֱ���;������:������,��ɽ��,������,������,����,��ɽ��,�Ϫ��;������:������,����,½����,������,��ҵ��,������;;����ʡ::������:������,������,��Ϫ��,�ڵ���,������,С����,������,Ϣ����,������,������;��˳��:������,ƽ����,�ն���,��������������������,���벼��������������,�������岼����������;�Ͻڵ���:�Ͻ���,����,ǭ����,��ɳ��,֯����,��Ӻ��,���������������������,������;����ˮ��:��ɽ��,��֦����,ˮ����,����;ǭ�������嶱��������:������,��ƽ��,ʩ����,������,��Զ��,᯹���,������,������,������,̨����,��ƽ��,�Ž���,�ӽ���,��ɽ��,�齭��,��կ��;ǭ�ϲ���������������:������,��Ȫ��,����,����,�Ͱ���,��ɽ��,ƽ����,�޵���,��˳��,������,��ˮ��,����ˮ��������;ǭ���ϲ���������������:������,������,�հ���,��¡��,�����,������,�����,������;ͭ�ʵ���:ͭ����,������,��������������,ʯ����,˼����,ӡ������������������,�½���,�غ�������������,��������������,��ɽ����;������:�컨����,�㴨��,������,ͩ����,������,������,��������������������,������������������,�����,��̶��,������,ϰˮ��,��ˮ��,�ʻ���;;����ʡ::������:��Ӣ��,������,��ɽ��,������;��ɳ����������:;��ͤ��������������:;��������������:;������:;������:;������:;������:;�ֶ�����������:;�ٸ���:;��ˮ����������:;��ɳȺ��:;������:;������������������:;������:;�Ͳ���:;������:;�Ĳ���:;��ָɽ��:;��ɳȺ��:;��ɳȺ���ĵ������亣��:;;�ӱ�ʡ::ʯ��ׯ��:������,�Ŷ���,������,�»���,�������,ԣ����,������,������,�����,������,������,������,������,�޻���,�޼���,ƽɽ��,Ԫ����,����,������,޻����,������,������,¹Ȫ��;������:������,������,������,������,��Է��,�ˮ��,��ƽ��,��ˮ��,������,����,������,�ݳ���,�Դ��,������,������,����,������,���,˳ƽ��,��Ұ��,����,������,������,������,�߱�����;������:�»���,�˺���,����,����,������,������,��ɽ��,������,��Ƥ��,������,����,�ϴ����������,��ͷ��,������,������,�Ӽ���;�е���:˫����,˫����,ӥ��Ӫ�ӿ���,�е���,��¡��,ƽȪ��,��ƽ��,¡����,��������������,��������������,Χ�������ɹ���������;������:��ɽ��,��̨��,������,������,������,������,�ɰ���,������,����,����,������,������,����,������,��ƽ��,������,κ��,������,�䰲��;��ˮ��:�ҳ���,��ǿ��,������,��ǿ��,������,��ƽ��,�ʳ���,����,������,������,������;�ȷ���:������,������,�̰���,������,�����,�����,�İ���,�󳧻���������,������,������;�ػʵ���:������,ɽ������,��������,��������������,������,������,¬����;��ɽ��:·����,·����,��ұ��,��ƽ��,������,������,����,������,��ͤ��,Ǩ����,������,�ƺ���,����,Ǩ����;��̨��:�Ŷ���,������,��̨��,�ٳ���,������,������,¡Ң��,����,�Ϻ���,������,��¹��,�º���,������,ƽ����,����,�����,������,�Ϲ���,ɳ����;�żҿ���:�Ŷ���,������,������,�»�԰��,������,�ű���,������,��Դ��,������,ε��,��ԭ��,������,��ȫ��,������,��¹��,�����,������;;����ʡ::֣����:��ԭ��,������,�ܳǻ�����,��ˮ��,�Ͻ���,֣������,��ɽ��,��Ĳ��,������,������,������,��֣��,�Ƿ���;������:�ķ���,������,����,������,������,������,����,�ڻ���,������;�ױ���:��ɽ��,ɽ����,俱���,����,���;��Դ��:;������:�����,��վ��,������,ɽ����,������,������,������,����,��Դ��,������,������;������:��ͤ��,˳�ӻ�����,��¥��,�Ϲ���,����,���,ͨ����,ξ����,������,������;������:�ϳ���,������,�ܺӻ�����,������,������,������,�Ͻ���,�°���,�ﴨ��,����,������,������,������,������,��ʦ��;�����:Դ����,۱����,������,������,�����;������:�����,������,������,������,��Ͽ��,��ƽ��,������,������,������,�ƺ���,��Ұ��,ͩ����,������;ƽ��ɽ��:�»���,������,ʯ����,տ����,������,Ҷ��,³ɽ��,ۣ��,�����,������;�����:������,�����,������,����,̨ǰ��,�����;����Ͽ��:������,�ų���,����,¬����,������,�鱦��;������:��԰��,�����,��Ȩ��,���,������,�ϳ���,�ݳ���,������,������;������:������,������,��Ȫ��,��Ұ��,������,�����,ԭ����,�ӽ���,������,��ԫ��,������,������;������:ʦ����,ƽ����,��ɽ��,��ɽ��,����,�̳���,��ʼ��,�괨��,������,Ϣ��;������:κ����,������,۳����,�����,������,������;�ܿ���:������,������,������,��ˮ��,������,������,������,̫����,¹����,�����;פ������:�����,��ƽ��,�ϲ���,ƽ����,������,ȷɽ��,������,������,��ƽ��,�²���;;������ʡ::��������:������,�ϸ���,������,�㷻��,������,ƽ����,�ɱ���,������,������,������,����,������,ľ����,ͨ����,������,������,˫����,��־��,�峣��;������:����ͼ��,������,�ú�·��,�����,��ͬ��,������,��Դ��,�ֵ���,�Ŷ������ɹ���������;���˰������:������,������,Į����;�׸���:������,��ũ��,��ɽ��,�˰���,��ɽ��,��ɽ��,�ܱ���,�����;�ں���:������,�۽���,ѷ����,������,������,���������;������:������,��ɽ��,�ε���,������,���Ӻ���,��ɽ��,������,������,��ɽ��;��ľ˹��:������,������,ǰ����,������,����,������,�봨��,��ԭ��,��Զ��,ͬ����,������;ĵ������:������,������,������,������,������,�ֿ���,��Һ���,������,������,������;��̨����:������,��ɽ��,���Ӻ���,������;���������:��ɳ��,������,������,����Ϫ��,����������,����ɽ��,÷��˹���Ӷ�����,������,������,̩����,������,��ԣ��,��ɽ��,�˶���,��Ȫ��,ګ����;˫Ѽɽ��:��ɽ��,�붫��,�ķ�̨��,��ɽ��,������,������,������,�ĺ���;�绯��:������,������,������,�����,�찲��,��ˮ��,������,������,�ض���,������;������:������,�ϲ���,�Ѻ���,������,������,������,��Ϫ��,��ɽ����,��Ӫ��,��������,��������,������,��������,������,�ϸ�����,������,������;;����ʡ::�人��:������,������,�ǿ���,������,�����,��ɽ��,��ɽ��,��������,������,�̵���,������,������,������;������:���Ӻ���,������,������;��ʩ����������������:��ʩ��,������,��ʼ��,�Ͷ���,������,�̷���,������,�׷���;�Ƹ���:������,�ŷ���,�찲��,������,Ӣɽ��,�ˮ��,ޭ����,��÷��,�����,��Ѩ��;��ʯ��:��ʯ����,����ɽ��,��½��,��ɽ��,������,��ұ��;������:������,�޵���,��ɽ��,ɳ����,������;������:ɳ����,������,������,������,������,ʯ����,�����,������;Ǳ����:;��ũ������:;ʮ����:é����,������,����,������,��ɽ��,��Ϫ��,����,��������;������:������,��ˮ��;������:;������:;������:�̰���,������,ͨ����,������,ͨɽ��,�����;�差��:�����,������,������,������,�ȳ���,������,�Ϻӿ���,������,�˳���;Т����:Т����,Т����,������,������,Ӧ����,��½��,������;�˲���:������,��Ҹ���,�����,�Vͤ��,������,Զ����,��ɽ��,������,����������������,���������������,�˶���,������,֦����;;����ʡ::��ɳ��:ܽ����,������,��´��,������,�껨��,��ɳ��,������,������,�����;������:������,������,������,������,���,�����,��Դ��,ʯ����,������;������:������,������,������,������,������,�κ���,������,�����,����,������,������;������:������,�����,ʯ����,������,������,������,������,��ɽ��,�ⶫ��,���,������,������;������:�׳���,�з���,������,��Ϫ��,������,��ͬ��,��������������,�»ζ���������,�ƽ�����������,�������嶱��������,ͨ������������,�齭��;¦����:¦����,˫����,�»���,��ˮ����,��Դ��;������:˫����,������,������,�۶���,������,������,¡����,������,������,������,�ǲ�����������,�����;��̶��:�����,������,��̶��,������,��ɽ��;��������������������:������,��Ϫ��,�����,��ԫ��,������,������,��˳��,��ɽ��;������:������,��ɽ��,����,�ҽ���,������,�佭��;������:֥ɽ��,��ˮ̲��,������,������,˫����,����,������,��Զ��,��ɽ��,������,��������������;������:����¥��,��Ϫ��,��ɽ��,������,������,������,ƽ����,������,������;�żҽ���:������,����Դ��,������,ɣֲ��;������:������,«����,ʯ����,��Ԫ��,������,����,������,������,������;;����ʡ::������:�Ϲ���,������,������,������,��԰��,˫����,ũ����,��̨��,������,�»���;�׳���:䬱���,������,ͨ����,�����,����;��ɽ��:�˵�����,������,������,���׳�����������,��Դ��,�ٽ���;������:������,��̶��,��Ӫ��,������,������,�Ժ���,�����,������,��ʯ��;��Դ��:��ɽ��,������,������,������;��ƽ��:������,������,������,��ͨ����������,��������,˫����;��ԭ��:������,ǰ������˹�ɹ���������,������,Ǭ����,������;ͨ����:������,��������,ͨ����,������,������,÷�ӿ���,������;�ӱ߳�����������:�Ӽ���,ͼ����,�ػ���,������,������,������,������,��ͼ��;;����ʡ::�Ͼ���:������,������,�ػ���,������,��¥��,�¹���,�ֿ���,��ϼ��,�껨̨��,������,������,��ˮ��,�ߴ���;������:������,��¥��,��������,�±���,�����,������,��̳��;������:�����,������,������,������,��ˮ��,������,������,�����;���Ƹ���:������,������,������,������,������,������,������;��ͨ��:�紨��,��բ��,������,�綫��,������,�����,ͨ����,������;������:������,ƽ����,������,������,������,�����,��ҵ԰��,������,�żҸ���,��ɽ��,�⽭��,̫����;��Ǩ��:�޳���,��ԥ��,������,������,������;̩����:������,�߸���,�˻���,������,̩����,������;������:�簲��,�ϳ���,������,��ɽ��,��ɽ��,������,��������,������,������;������:��¥��,������,������,������,Ȫɽ��,����,����,ͭɽ��,�����,������,������;�γ���:ͤ����,�ζ���,��ˮ��,������,������,������,������,��̨��,�����;������:������,������,����,��Ӧ��,������,������,������;����:������,������,��ͽ��,������,������,������;;����ʡ::�ϲ���:������,������,��������,������,��ɽ����,�ϲ���,�½���,������,������;������:�ٴ���,�ϳ���,�质��,�Ϸ���,������,�ְ���,�˻���,��Ϫ��,��Ϫ��,������,�����;������:�¹���,����,�ŷ���,������,������,������,��Զ��,������,������,ȫ����,������,�ڶ���,�˹���,�����,Ѱ����,ʯ����,�����,�Ͽ���;������:������,��ԭ��,������,��ˮ��,Ͽ����,�¸���,������,̩����,�촨��,����,������,������,����ɽ��;��������:������,��ɽ��,������,��ƽ��;�Ž���:®ɽ��,�����,�Ž���,������,��ˮ��,������,�°���,������,������,������,������,�����;Ƽ����:��Դ��,�涫��,������,������,«Ϫ��;������:������,������,�����,��ɽ��,Ǧɽ��,�����,߮����,�����,۶����,������,��Դ��,������;������:��ˮ��,������;�˴���:Ԭ����,������,������,�ϸ���,�˷���,������,ͭ����,�����,������,�߰���;ӥ̶��:�º���,�཭��,��Ϫ��;;����ʡ::������:��ƽ��,�����,����,�ʹ���,������,�ռ�����,������,�³�����,�ں���,������,����,������,��ƽ��,������,������;��ɽ��:������,������,��ɽ��,ǧɽ��,̨����,�������������,������;��Ϫ��:ƽɽ��,Ϫ����,��ɽ��,�Ϸ���,��Ϫ����������,��������������;������:˫����,������,������,��ƽ��,�����������ɹ���������,��Ʊ��,��Դ��;������:��ɽ��,������,ɳ�ӿ���,�ʾ�����,��˳����,������,������,������,�߷�����,��������,ׯ����;������:Ԫ����,������,����,��������������,������,�����;��˳��:�¸���,������,������,˳����,��˳��,�±�����������,��ԭ����������;������:������,������,̫ƽ��,�������,ϸ����,�����ɹ���������,������;��«����:��ɽ��,������,��Ʊ��,������,������,�˳���;������:������,�����,̫����,��ɽ��,����,�躣��,������;������:������,��ʥ��,��ΰ��,��������,̫�Ӻ���,������,������;�̽���:˫̨����,��¡̨��,������,��ɽ��;������:������,�����,������,������,��ͼ��,����ɽ��,��ԭ��;Ӫ����:վǰ��,������,����Ȧ��,�ϱ���,������,��ʯ����;;���ɹ�������::���ͺ�����:�³���,������,��Ȫ��,������,��Ĭ������,�п�����,���ָ����,��ˮ����,�䴨��;��������:����������,����������,�������;�����׶���:�ٺ���,��ԭ��,�����,������ǰ��,����������,�����غ���,��������;��ͷ��:������,��������,��ɽ��,ʯ����,���ƿ���,��ԭ��,��Ĭ������,������,�����ï����������;�����:��ɽ��,Ԫ��ɽ��,��ɽ��,��³�ƶ�����,��������,��������,������,��ʲ������,��ţ����,��������,������,������;������˹��:��ʤ��,��������,׼�����,���п�ǰ��,���п���,������,������,���������;���ױ�����:��������,������,Ī�����ߴ��Ӷ���������,���״�������,���¿���������,�°Ͷ�����,�°Ͷ�������,�°Ͷ�������,��������,����ʯ��,��������,���������,������;ͨ����:�ƶ�����,�ƶ�����������,�ƶ�����������,��³��,������,������,��³����,���ֹ�����;�ں���:��������,������,�ڴ���;�����첼��:������,׿����,������,�̶���,�˺���,������,���������ǰ��,�������������,�������������,��������,������;���ֹ�����:����������,���ֺ�����,���͸���,����������,����������,������������,������������,̫������,�����,�������,������,������;�˰���:����������,����ɽ��,�ƶ�������ǰ��,�ƶ�����������,��������,ͻȪ��;;���Ļ���������::������:������,������,�����,������,������,������;��ԭ��:ԭ����,������,¡����,��Դ��,������;ʯ��ɽ��:�������,��ũ��,ƽ����;������:��ͨ��,�γ���,ͬ����,��ͭϿ��;������:ɳ��ͷ��,������,��ԭ��;;�ຣʡ::������:�Ƕ���,������,������,�Ǳ���,��ͨ��������������,������,��Դ��;�������������:������,������,�ʵ���,������,������,�����;��������������:��Դ����������,������,������,�ղ���;��������:ƽ����,��ͻ�������������,�ֶ���,��������������,��¡����������,ѭ��������������;���ϲ���������:������,ͬ����,�����,�˺���,������;�����ɹ������������:���ľ��,�������,������,������,�����;���ϲ���������:ͬ����,������,�����,�����ɹ���������;��������������:������,�Ӷ���,�ƶ���,�ζ���,��ǫ��,��������;;ɽ��ʡ::������:������,������,������,������,������,������,ƽ����,������,�̺���,������;������:������,������,������,�����,մ����,������,��ƽ��;������:�³���,����,������,������,������,�����,ƽԭ��,�Ľ���,�����,������,������;��Ӫ��:��Ӫ��,�ӿ���,������,������,������;������:ĵ����,����,����,������,��Ұ��,۩����,۲����,������,������;������:������,�γ���,΢ɽ��,��̨��,������,������,������,��ˮ��,��ɽ��,������,������,�޳���;������:������,�ֳ���;�ĳ���:��������,������,ݷ��,��ƽ��,������,����,������,������;������:��ɽ��,��ׯ��,�Ӷ���,������,۰����,��ˮ��,��ɽ��,����,ƽ����,������,������,������;�ൺ��:������,�б���,�ķ���,�Ƶ���,��ɽ��,�����,������,������,��ī��,ƽ����,������,������;������:������,�ɽ��,������,����;̩����:̩ɽ��,�����,������,��ƽ��,��̩��,�ʳ���;������:������,�ĵ���,�ٳ���,��ɽ��;Ϋ����:Ϋ����,��ͤ��,������,������,������,������,������,�����,�ٹ���,������,������,������;��̨��:֥���,��ɽ��,Ĳƽ��,��ɽ��,������,������,������,������,������,������,��Զ��,��ϼ��,������;��ׯ��:������,Ѧ����,ỳ���,̨��ׯ��,ɽͤ��,������;�Ͳ���:�ʹ���,�ŵ���,��ɽ��,������,�ܴ���,��̨��,������,��Դ��;;ɽ��ʡ::̫ԭ��:С����,ӭ����,�ӻ�����,���ƺ��,�������,��Դ��,������,������,¦����,�Ž���;������:����,����,������,��ԫ��,������,ƽ˳��,�����,������,������,������,����,��Դ��,º����;��ͬ��:����,����,�Ͻ���,������,������,������,������,������,��Դ��,������,��ͬ��;������:����,��ˮ��,������,�괨��,������,��ƽ��;������:�ܴ���,������,��Ȩ��,��˳��,������,������,̫����,����,ƽң��,��ʯ��,������;�ٷ���:Ң����,������,������,�����,�鶴��,����,������,��ɽ��,����,������,������,����,������,����,������,������,������;������:��ʯ��,��ˮ��,������,����,����,������,ʯ¥��,���,��ɽ��,������,������,Т����,������;˷����:˷����,ƽ³��,ɽ����,Ӧ��,������,������;������:�ø���,������,��̨��,����,������,������,������,�����,��կ��,����,������,������,ƫ����,ԭƽ��;��Ȫ��:����,����,����,ƽ����,����;�˳���:�κ���,�����,������,��ϲ��,�ɽ��,�����,���,ԫ����,����,ƽ½��,�ǳ���,������,�ӽ���;;����ʡ::������:�³���,������,������,�����,δ����,������,������,������,������,������,������,����,������;������:������,������,ʯȪ��,������,������,᰸���,ƽ����,��ƺ��,Ѯ����,�׺���;������:μ����,��̨��,�²���,������,�ɽ��,������,ü��,¤��,ǧ����,������,����,̫����;������:��̨��,��֣��,�ǹ���,����,������,����,��ǿ��,������,�����,������,��ƺ��;������:������,������,������,������,ɽ����,����,��ˮ��;ͭ����:������,ӡ̨��,ҫ����,�˾���;μ����:��μ��,����,������,������,������,�γ���,�ѳ���,��ˮ��,��ƽ��,������,������;������:�ض���,������,μ����,��ԭ��,������,Ǭ��,��Ȫ��,������,����,������,Ѯ����,������,�书��,��ƽ��;�Ӱ���:������,�ӳ���,�Ӵ���,�ӳ���,������,־����,������,��Ȫ��,����,�崨��,�˴���,������,������;������:������,��ľ��,������,��ɽ��,������,������,�����,��֬��,����,�Ɽ��,�彧��,������;;�Ĵ�ʡ::�ɶ���:������,������,��ţ��,�����,�ɻ���,��Ȫ����,��׽���,�¶���,�½���,������,������,˫����,ۯ��,������,�ѽ���,�½���,��������,������,������,������;���Ӳ���Ǽ��������:�봨��,����,ï��,������,��կ����,����,С����,��ˮ��,��������,������,������,��������,��ԭ��;������:������,ͨ����,�Ͻ���,ƽ����;������:ͨ����,����,������,������,������,����,��Դ��;������:�����,�н���,�޽���,�㺺��,ʲ����,������;���β���������:������,����,������,������,�Ž���,������,¯����,������,������,�¸���,������,ʯ����,ɫ����,������,������,�����,������,������;�㰲��:�㰲��,������,��ʤ��,��ˮ��,��Ө��;��Ԫ��:������,Ԫ����,������,������,�ന��,������,��Ϫ��;��ɽ��:������,ɳ����,��ͨ����,��ں���,��Ϊ��,������,�н���,�崨��,�������������,��������������,��üɽ��;��ɽ����������:������,ľ�����������,��Դ��,�²���,������,�ᶫ��,������,�ո���,������,������,�Ѿ���,ϲ����,������,Խ����,������,������,�ײ���;������:������,��Ϫ��,����̶��,����,�Ͻ���,������,������;üɽ��:������,������,��ɽ��,������,������,������;������:������,������,��̨��,��ͤ��,����,������,����Ǽ��������,ƽ����,������;�ڽ���:������,������,��Զ��,������,¡����;�ϳ���:˳����,��ƺ��,������,�ϲ���,Ӫɽ��,���,��¤��,������,������;��֦����:����,����,�ʺ���,������,�α���;������:��ɽ��,������,��Ϫ��,�����,��Ӣ��;�Ű���:�����,��ɽ��,������,��Դ��,ʯ����,��ȫ��,«ɽ��,������;�˱���:������,�˱���,��Ϫ��,������,������,����,����,������,������,��ɽ��;������:�㽭��,������,������,������;�Թ���:��������,������,����,��̲��,����,��˳��;;����������::������:�ǹ���,������,������,��ľ��,��ˮ��,����������,������,ī�񹤿���;�������:������,������,������,������,�Ｊ��,������,������;��������:������,������,������,��������,������,������,������,����,â����,��¡��,�߰���;��֥����:��֥��,����������,������,ī����,������,������,����;��������:������,������,������,������,������,������,����,�����,������,������;�տ������:�տ�����,��ľ����,������,������,������,������,������,лͨ����,������,�ʲ���,������,������,�ٰ���,�Ƕ���,��¡��,����ľ��,������,�ڰ���;ɽ�ϵ���:�˶���,������,������,ɣ����,������,������,������,������,�Ӳ���,¡����,������,�˿�����;;�½�ά���������::��³ľ����:��ɽ��,ɳ���Ϳ���,������,ˮĥ����,ͷ�ͺ���,�������,��ɽ��,��³ľ����;�����յ���:��������,������,�⳵��,ɳ����,�º���,�ݳ���,��ʲ��,��������,��ƺ��;��������:;����̩����:����̩��,��������,������,������,���ͺ���,�����,��ľ����;���������ɹ�������:�������,��̨��,ξ����,��Ǽ��,��ĩ��,���Ȼ���������,�;���,��˶��,������;���������ɹ�������:������,������,��Ȫ��;��������������:������,������,��Ȫ��,��ͼ����,����˹��,��̨��,��ľ������,ľ�ݹ�����������;���ܵ���:������,������������������,������;�������:������,������,ī����,Ƥɽ��,������,������,������,�����;��ʲ����:��ʲ��,�踽��,������,Ӣ��ɳ��,������,ɯ����,Ҷ����,�������,���պ���,٤ʦ��,�ͳ���,��ʲ�����������������;����������:��ɽ����,����������,�׼�̲��,�ڶ�����;�������տ¶�����������:��ͼʲ��,��������,��������,��ǡ��;ʯ������:;���ǵ���:������,������,������,ɳ����,������,ԣ����,�Ͳ��������ɹ�������;ͼľ�����:;��³������:��³����,۷����,�п�ѷ��;�������:;���������������:������,������,������,�첼�������������,������,������,��Դ��,������,�ؿ�˹��,���տ���;;����ʡ::������:�廪��,������,�ٶ���,��ɽ��,������,�ʹ���,������,������,������,ʯ������������,������,»Ȱ��������������,Ѱ���������������,������;��ɽ��:¡����,ʩ����,�ڳ���,������,������;��������������:������,˫����,Ĳ����,�ϻ���,Ҧ����,��Ҧ��,������,Ԫı��,�䶨��,»����;��������������:������,�������������,������,������,�ֶ���,�Ͻ�����������,Ρɽ�������������,��ƽ��,������,��Դ��,������,������;�º���徰����������:������,º����,������,ӯ����,¤����;�������������:���������,������,ά��������������;��ӹ���������������:������,��Զ��,������,��������������,��ˮ��,ʯ����,������,������,Ԫ����,�����,��ƽ�����������������,�̴���,�ӿ�����������;������:�ų���,����������������,��ʤ��,��ƺ��,��������������;�ٲ���:������,������,����,������,����,˫�����������岼�������������,������������������,��Դ����������;ŭ��������������:��ˮ��,������,��ɽ������ŭ��������,��ƺ����������������;������:������,������,½����,ʦ����,��ƽ��,��Դ��,������,մ����,������;˼é��:������,�ն�����������������,ī��������������,��������������,���ȴ�������������,�������������������������,���ǹ���������������,������������������������,����������������,��������������;��ɽ׳������������:��ɽ��,��ɽ��,������,��������,������,����,������,������;��˫���ɴ���������:������,�º���,������;��Ϫ��:������,������,�ν���,ͨ����,������,������,��ɽ����������,��ƽ�������������,Ԫ���������������������;��ͨ��:������,³����,�ɼ���,�ν���,�����,������,�罭��,������,������,������,ˮ����;;�㽭ʡ::������:�ϳ���,�³���,������,������,������,������,��ɽ��,�ຼ��,ͩ®��,������,������,������,�ٰ���;������:������,�����,������,������,������;������:�����,������,������,������,������,ƽ����,ͩ����;����:�ĳ���,����,������,�ֽ���,�Ͱ���,��Ϫ��,������,������,������;��ˮ��:������,������,������,�����,������,�ƺ���,��Ԫ��,�������������,��Ȫ��;������:������,������,������,������,����,۴����,��ɽ��,������,��Ҧ��,��Ϫ��,���;������:�³���,�齭��,��ɽ��,������,������,��ɽ��;������:Խ����,������,�²���,������,������,������;̨����:������,������,·����,����,������,��̨��,�ɾ���,������,�ٺ���;������:¹����,������,걺���,��ͷ��,������,ƽ����,������,�ĳ���,̩˳��,����,������;��ɽ��:������,������,�ɽ��,������;;����ر�������::����:;��۵�:;�½�:;;�����ر�������::���Ű뵺:;�뵺:;;̨��ʡ::̨����:;������:;������:;������:;��¡��:;������:;������:;������:;������:;��Ͷ��:;�����:;������:;̨����:;̨����:;̨����:;̨����:;̨����:;̨����:;��԰��:;������:;������:;������:;������:;�û���:;;����::����:";
	var psAr=[],cityJson={};countieJson={};
	var ps=sData.split(";;");
	for(var i=0;i<ps.length;i++){
		var psData=ps[i].split("::");
		psAr.push(psData[0]);
		var cityAr=[];
		areas.CITIES[psData[0]]=cityAr;
		var cities=psData[1].split(";");
		for(var j=0;j<cities.length;j++){
			var citiesData=cities[j].split(":");
			cityAr.push(citiesData[0]);
			areas.COUNTIES[citiesData[0]]=(citiesData[1]||"").split(",");
		}
	}
	areas.PROVINCES=psAr;

	QW.SelectAssist["AREAS"]=areas;
})();


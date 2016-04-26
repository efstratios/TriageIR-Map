/**
 * Created by rel0aded on 3/26/16.
 */

 $(document).ready(function () {

 	/*------------------ save hostname  ------------------*/

 	$(".hostnames").click(function (e) {
 		e.preventDefault();
 		var hostname = $(this).attr('href');
 		console.log(hostname);
 		$("body").data("hostnames", hostname);
 		$('li').removeClass('active');
 		$(this).closest("li").addClass('active').siblings().removeClass('active');
        return (false);   // no default behavior from clicking on the link
    });

 	$('.triage_content_navbar .btn').click(function () {
 		$('.triage_content_navbar .btn').removeClass('active');
 		$(this).closest(".btn").addClass('active').siblings().removeClass('active');
        return (false);   // no default behavior from clicking on the link
    });

 	$('.triage_output_navbar_options .btn').click(function () {
 		$(this).closest(".btn").addClass('active').siblings().removeClass('active');
        return (false);   // no default behavior from clicking on the link
    });

 	/*------------------ system_options ------------------*/

 	$("#system_info_option").click(function (hostname) {
 		ajaxCall(hostname,"/static/logs/" + $("body").data("hostnames") + "/System Info.txt")
 	});

 	$("#processes_info").click(function (hostname) {
 		ajaxCall(hostname,"/static/logs/" + $("body").data("hostnames") + "/Processes.txt")
 	});

 	$("#services_info").click(function (hostname) {
 		ajaxCall(hostname,"/static/logs/" + $("body").data("hostnames") + "/Services.txt")
 	});

 	$("#handles_info").click(function (hostname) {
 		ajaxCall(hostname,"/static/logs/" + $("body").data("hostnames") + "/Handles.txt")
 	});

 	$("#scheduled_tasks_info").click(function (hostname) {
 		ajaxCall(hostname,"/static/logs/" + $("body").data("hostnames") + "/Scheduled Tasks.txt")
 	});

 	$("#hostname_info").click(function (hostname) {
 		ajaxCall(hostname,"/static/logs/" + $("body").data("hostnames") + "/Hostname.txt")
 	});

 	$("#application_log").click(function (hostname) {
 		ajaxCall(hostname,"/static/logs/" + $("body").data("hostnames") + "/Application Log.csv")
 	});

 	$("#incident_log").click(function (hostname) {
 		ajaxCall(hostname,"/static/logs/" + $("body").data("hostnames") + "/Incident Log.txt")
 	});

 	$("#autorun_info").click(function (hostname) {
 		ajaxCall(hostname,"/static/logs/" + $("body").data("hostnames") + "/AutoRun Info.txt")
 	});

 	$("#autorun_info_csv").click(function (hostname) {
 		ajaxCall(hostname,"/static/logs/" + $("body").data("hostnames") + "/AutoRun Info.csv")
 	});

 	$("#startup_wmi_info").click(function (hostname) {
 		ajaxCall(hostname,"/static/logs/" + $("body").data("hostnames") + "/Start Up WMI Info.txt")
 	});

 	$("#account_settings_info").click(function (hostname) {
 		ajaxCall(hostname,"/static/logs/" + $("body").data("hostnames") + "/Account Details.txt")
 	});

 	/*------------------ network_options ------------------*/

 	$("#ip_configuration").click(function (hostname) {
 		ajaxCall(hostname,"/static/logs/" + $("body").data("hostnames") + "/IP Info.txt")
 	});

 	$("#active_connections").click(function (hostname) {
 		ajaxCall(hostname,"/static/logs/" + $("body").data("hostnames") + "/Network Connections.txt")
 	});

 	$("#connection_routes").click(function (hostname) {
 		ajaxCall(hostname,"/static/logs/" + $("body").data("hostnames") + "/Routes.txt")
 	});

 	$("#arp_data").click(function (hostname) {
 		ajaxCall(hostname,"/static/logs/" + $("body").data("hostnames") + "/ARP Info.txt")
 	});

 	$("#dns_info").click(function (hostname) {
 		ajaxCall(hostname,"/static/logs/" + $("body").data("hostnames") + "/DNS Info.txt")
 	});

 	$("#netbios_info").click(function (hostname) {
 		ajaxCall(hostname,"/static/logs/" + $("body").data("hostnames") + "/NBTstat.txt")
 	});

 	$("#local_network_shares").click(function (hostname) {
 		ajaxCall(hostname,"/static/logs/" + $("body").data("hostnames") + "/LocalShares.txt")
 	});

 	$("#open_shared_files").click(function (hostname) {
 		ajaxCall(hostname,"/static/logs/" + $("body").data("hostnames") + "/Open Shared Files.txt")
 	});

 	$("#connected_sessions").click(function (hostname) {
 		ajaxCall(hostname,"/static/logs/" + $("body").data("hostnames") + "/Sessions.txt")
 	});

 	$("#workgroup_computers").click(function (hostname) {
 		ajaxCall(hostname,"/static/logs/" + $("body").data("hostnames") + "/Workgroup PC Information.txt")
 	});

 	/*------------------ registry_options ------------------*/

 	$("#system_reg_hive").click(function (hostname) {
 		ajaxCall(hostname,"/static/logs/" + $("body").data("hostnames") + "/Evidence/SYSTEM_Ripped_Report.txt")
 	});

 	$("#sec_reg_hive").click(function (hostname) {
 		ajaxCall(hostname,"/static/logs/" + $("body").data("hostnames") + "/Evidence/SECURITY_Ripped_Report.txt")
 	});

 	$("#software_reg_hive").click(function (hostname) {
 		ajaxCall(hostname,"/static/logs/" + $("body").data("hostnames") + "/Evidence/SOFTWARE_Ripped_Report.txt")
 	});

 	$("#sam_reg_hive").click(function (hostname) {
 		ajaxCall(hostname,"/static/logs/" + $("body").data("hostnames") + "/Evidence/SAM_Ripped_Report.txt")
 	});

 	$("#ntuser_reg_hive").click(function (hostname) {
 		ajaxCall(hostname,"/static/logs/" + $("body").data("hostnames") + "/Evidence/NTUSER_Ripped_Report.txt")
 	});
 	/* -+-+-+-+-+- -+-+-+-+-+- -+-+-+-+-+- -+-+-+-+-+-To Be Checked -+-+-+-+-+- -+-+-+-+-+- -+-+-+-+-+- -+-+-+-+-+-*/

 	$("#current_user_reg_hive").click(function (hostname) {
 		ajaxCall(hostname,"/static/logs/" + $("body").data("hostnames") + "/System Info.txt")
 	});

 	/* -+-+-+-+-+- -+-+-+-+-+- -+-+-+-+-+- -+-+-+-+-+- END - To Be Checked -+-+-+-+-+- -+-+-+-+-+- -+-+-+-+-+- -+-+-+-+-+-*/

 	$("#all_users_reg_hive").click(function (hostname) {
 		ajaxCall(hostname,"/static/logs/" + $("body").data("hostnames") + "/Evidence/All Users-usrclass.dat1_Ripped_Report.txt")
 	});

 	$("#user_reg_hive").click(function (hostname) {
 		ajaxCall(hostname,"/static/logs/" + $("body").data("hostnames") + "/Evidence/User-usrclass.dat1_Ripped_Report.txt")
 	});

 	$("#default_user_reg_hive").click(function (hostname) {
 		ajaxCall(hostname,"/static/logs/" + $("body").data("hostnames") + "/Evidence/Default User-usrclass.dat1_Ripped_Report.txt")
 	});

 	$("#default_reg_hive").click(function (hostname) {
 		ajaxCall(hostname,"/static/logs/" + $("body").data("hostnames") + "/Evidence/Default-usrclass.dat1_Ripped_Report.txt")
 	});

 	$("#temp_reg_hive").click(function (hostname) {
 		ajaxCall(hostname,"/static/logs/" + $("body").data("hostnames") + "/Evidence/TEMP-usrclass.dat1_Ripped_Report.txt")
 	});

 	$("#public_reg_hive").click(function (hostname) {
 		ajaxCall(hostname,"/static/logs/" + $("body").data("hostnames") + "/Evidence/Public-usrclass.dat1_Ripped_Report.txt")
 	});

 	$("#updatus_user_reg_hive").click(function (hostname) {
 		ajaxCall(hostname,"/static/logs/" + $("body").data("hostnames") + "/Evidence/UpdatusUser-usrclass.dat1_Ripped_Report.txt")
 	});


 	/*------------------ disk_options ------------------*/

 	$("#ntfs_config").click(function (hostname) {
 		ajaxCall(hostname,"/static/logs/" + $("body").data("hostnames") + "/NTFS Info.txt")
 	});

 	$("#mounted_disks").click(function (hostname) {
 		ajaxCall(hostname,"/static/logs/" + $("body").data("hostnames") + "/Disk Mounts.txt")
 	});

 	$("#dir_info").click(function (hostname) {
 		ajaxCall(hostname,"/static/logs/" + $("body").data("hostnames") + "/Directory Info.txt")
 	});

 	$("#vol_info").click(function (hostname) {
 		ajaxCall(hostname,"/static/logs/" + $("body").data("hostnames") + "/Volume Info.txt")
 	});
 	/*------------------ hashes_options ------------------*/

 	$("#md5_hashes").click(function (hostname) {
 		ajaxCall(hostname,"/static/logs/" + $("body").data("hostnames") + "/MD5 Hashes.txt")
 	});

 	$("#sha1_hashes").click(function (hostname) {
 		ajaxCall(hostname,"/static/logs/" + $("body").data("hostnames") + "/SHA1 Hashes.txt")
 	});

 	$("#prefetch_copy").click(function (hostname) {
 		ajaxCall(hostname,"/static/logs/" + $("body").data("hostnames") + "/Prefetch Copy Log.txt")
 	});

 	/*------------------ log_options ------------------*/

 	$("#security_log").click(function (hostname) {
 		ajaxCall(hostname,"/static/logs/" + $("body").data("hostnames") + "/Security Log.csv")
 	});

 	$("#system_log").click(function (hostname) {
 		ajaxCall(hostname,"/static/logs/" + $("body").data("hostnames") + "/System Log.csv")
 	});

 	$("#system_vars").click(function (hostname) {
 		ajaxCall(hostname,"/static/logs/" + $("body").data("hostnames") + "/System Variables.txt")
 	});

 	$("#event_log").click(function (hostname) {
 		ajaxCall(hostname,"/static/logs/" + $("body").data("hostnames") + "/Event Log Copy.txt")
 	});

 	$("#commands_log").click(function (hostname) {
 		ajaxCall(hostname,"/static/logs/" + $("body").data("hostnames") + "/commands.log")
 	});

 	/*------------------ jump_lists_options ------------------*/

 	$("#user_jump_list_auto").click(function (hostname) {
 		ajaxCall(hostname,"/static/logs/" + $("body").data("hostnames") + "/Evidence/Jump Lists/User_JumpList_Auto_Copy.txt")
 	});

 	$("#user_jump_list_custom").click(function (hostname) {
 		ajaxCall(hostname,"/static/logs/" + $("body").data("hostnames") + "/Evidence/Jump Lists/User_JumpList_Custom_Copy.txt")
 	});

 	$("#default_jump_list_auto").click(function (hostname) {
 		ajaxCall(hostname,"/static/logs/" + $("body").data("hostnames") + "/Evidence/Jump Lists/Default_JumpList_Auto_Copy.txt")
 	});

 	$("#default_jump_list_custom").click(function (hostname) {
 		ajaxCall(hostname,"/static/logs/" + $("body").data("hostnames") + "/Evidence/Jump Lists/Default_JumpList_Custom_Copy.txt")
 	});

 	$("#default_user_jump_list_auto").click(function (hostname) {
 		ajaxCall(hostname,"/static/logs/" + $("body").data("hostnames") + "/Evidence/Jump Lists/Default User_JumpList_Auto_Copy.txt")
 	});

 	$("#default_user_jump_list_custom").click(function (hostname) {
 		ajaxCall(hostname,"/static/logs/" + $("body").data("hostnames") + "/Evidence/Jump Lists/Default User_JumpList_Custom_Copy.txt")
 	});

 	$("#temp_jump_list_auto").click(function (hostname) {
 		ajaxCall(hostname,"/static/logs/" + $("body").data("hostnames") + "/Evidence/Jump Lists/TEMP_JumpList_Auto_Copy.txt")
 	});

 	$("#temp_jump_list_custom").click(function (hostname) {
 		ajaxCall(hostname,"/static/logs/" + $("body").data("hostnames") + "/Evidence/Jump Lists/TEMP_JumpList_Custom_Copy.txt")
 	});

 	$("#public_jump_list_auto").click(function (hostname) {
 		ajaxCall(hostname,"/static/logs/" + $("body").data("hostnames") + "/Evidence/Jump Lists/Public_JumpList_Auto_Copy.txt")
 	});

 	$("#public_jump_list_custom").click(function (hostname) {
 		ajaxCall(hostname,"/static/logs/" + $("body").data("hostnames") + "/Evidence/Jump Lists/Public_JumpList_Custom_Copy.txt")
 	});

 	$("#all_users_jump_list_auto").click(function (hostname) {
 		ajaxCall(hostname,"/static/logs/" + $("body").data("hostnames") + "/Evidence/Jump Lists/All Users_JumpList_Auto_Copy.txt")
 	});

 	$("#all_users_jump_list_custom").click(function (hostname) {
 		ajaxCall(hostname,"/static/logs/" + $("body").data("hostnames") + "/Evidence/Jump Lists/All Users_JumpList_Custom_Copy.txt")
 	});

 	$("#updatus_user_jump_list_auto").click(function (hostname) {
 		ajaxCall(hostname,"/static/logs/" + $("body").data("hostnames") + "/Evidence/Jump Lists/UpdatusUser_JumpList_Auto_Copy.txt")
 	});

 	$("#updatus_user_jump_list_custom").click(function (hostname) {
 		ajaxCall(hostname,"/static/logs/" + $("body").data("hostnames") + "/Evidence/Jump Lists/UpdatusUser_JumpList_Custom_Copy.txt")
 	});

 	/*------------------ recent_lnks_options ------------------*/

 	$("#user_recent_lnk").click(function (hostname) {
 		ajaxCall(hostname,"/static/logs/" + $("body").data("hostnames") + "/Evidence/Recent LNKs/User_Recent_Copy.txt")
 	});

 	$("#default_recent_lnk").click(function (hostname) {
 		ajaxCall(hostname,"/static/logs/" + $("body").data("hostnames") + "/Evidence/Recent LNKs/Default_Recent_Copy.txt")
 	});

 	$("#default_user_recent_lnk").click(function (hostname) {
 		ajaxCall(hostname,"/static/logs/" + $("body").data("hostnames") + "/Evidence/Recent LNKs/Default User_Recent_Copy.txt")
 	});

 	$("#public_user_recent_lnk").click(function (hostname) {
 		ajaxCall(hostname,"/static/logs/" + $("body").data("hostnames") + "/Evidence/Recent LNKs/Public_Recent_Copy.txt")
 	});

 	$("#all_users_recent_lnk").click(function (hostname) {
 		ajaxCall(hostname,"/static/logs/" + $("body").data("hostnames") + "/Evidence/Recent LNKs/All Users_Recent_Copy.txt")
 	});

 	$("#updatus_user_recent_lnk").click(function (hostname) {
 		ajaxCall(hostname,"/static/logs/" + $("body").data("hostnames") + "/Evidence/Recent LNKs/UpdatusUser_Recent_Copy.txt")
 	});

 	$("#temp_user_recent_lnk").click(function (hostname) {
 		ajaxCall(hostname,"/static/logs/" + $("body").data("hostnames") + "/Evidence/Recent LNKs/TEMP_Recent_Copy.txt")
 	});

 	/*------------------ about_information ------------------*/

 	$("#about").click(function (hostname) {
 		ajaxCall(hostname,"/static/about.txt")
 	});

 	$("#help").click(function (hostname) {
 		ajaxCall(hostname,"/static/help.txt")
 	});

 });
/*end of document-ready*/

function ajaxCall(hostname,url) {
	$.ajax({
		url: url,
		dataType: "text",
		success: function (data) {
			if(data=='') 
			{ 
				$("#triage_output_content").text("File is empty - found on: '" + $("body").data("hostnames") + "' Hostname!");

			} else{
				$("#triage_output_content").text(data);
			}
		},
		error: function (data) {
			$("#triage_output_content").text("File not found on: '" + $("body").data("hostnames") + "' Hostname!");
		},
	});
}

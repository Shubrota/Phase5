<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>

<sec:authentication property="principal.username" var="username" />
<p>Welcome, ${username}!</p>

&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;

<a href="courses" >Courses</a> 
&nbsp;&nbsp;|&nbsp;&nbsp;
<a href="students" >Students</a>


&nbsp;&nbsp;|&nbsp;&nbsp;
<a href="logout" >Logout</a>




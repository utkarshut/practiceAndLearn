

class Deloitte{
   public static void main(String[] args) {
       String str = "reverse string";
       StringBuilder sb = new StringBuilder();
       for(int j=str.length()-1; j >=0 ; j--){
            sb.append(str.charAt(j));
       }
       System.out.println(sb.toString());

   }
}
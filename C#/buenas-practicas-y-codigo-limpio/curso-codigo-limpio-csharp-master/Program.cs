﻿// List<string> TaskList { get; set; } = new List<string>();

// int menuSelected = 0;
// do
// {
//     menuSelected = ShowMainMenu();
//     if ((Menu)menuSelected == Menu.Add)
//     {
//         ShowMenuAdd();
//     }
//     else if ((Menu)menuSelected == Menu.Remove)
//     {
//         ShowMenuEliminar();
//     }
//     else if ((Menu)menuSelected == Menu.List)
//     {
//         ShowMenuTaskList();
//     }
// } while ((Menu)menuSelected != Menu.Exit);

// /// <summary>
// /// Show the main menu 
// /// </summary>
// /// <returns>Returns option indicated by user</returns>
// int ShowMainMenu()
// {
//     Console.WriteLine("----------------------------------------");
//     Console.WriteLine("Ingrese la opción a realizar: ");
//     Console.WriteLine("1. Nueva tarea");
//     Console.WriteLine("2. Remover tarea");
//     Console.WriteLine("3. Tareas pendientes");
//     Console.WriteLine("4. Salir");

//     // Read line
//     string line = Console.ReadLine();
//     return Convert.ToInt32(line);
// }

// void ShowMenuEliminar()
// {
//     try
//     {
//         Console.WriteLine("Ingrese el número de la tarea a remover: ");
//         // Show current taks
//         ShowMenuTaskList();
//         string line = Console.ReadLine();
//         // Remove one position
//         int indexToRemove = Convert.ToInt32(line) - 1;
//         if (indexToRemove > (TaskList.Count - 1) || indexToRemove < -1)
//         {

//             if (indexToRemove > -1 && TaskList.Count > 0)
//             {
//                 string task = TaskList[indexToRemove];
//                 TaskList.RemoveAt(indexToRemove);
//                 Console.WriteLine("Tarea " + task + " eliminada");
//             }
//         }
//     }
//     catch (Exception)
//     {
//         Console.WriteLine("ha ocurrido un error eliminando la tarea");
//     }
// }

// void ShowMenuAdd()
// {
//     try
//     {
//         Console.WriteLine("Ingrese el nombre de la tarea: ");
//         string task = Console.ReadLine();
//         TaskList.Add(task);
//         Console.WriteLine("Tarea registrada");
//     }
//     catch (Exception)
//     {
//     }
// }

// void ShowMenuTaskList()
// {
//     if (TaskList == null || TaskList.Count == 0)
//     {
//         Console.WriteLine("No hay tareas por realizar");
//     }
//     else
//     {
//         Console.WriteLine("----------------------------------------");
//         var indexTask = 0;
//         TaskList.ForEach(p => Console.WriteLine(indexTask++ + ". " + p));

//         Console.WriteLine("----------------------------------------");
//     }
// }


// public enum Menu
// {
//     Add = 1,
//     Remove = 2,
//     List = 3,
//     Exit = 4
// }

